// pages/api/scrape-reviews.js
import puppeteer from "puppeteer";

export default async function handler(req, res) {
    try {
        const { placeUrl } = req.query;

        if (!placeUrl) {
            return res.status(400).json({ error: "Masukkan URL Google Maps" });
        }

        // Jalankan puppeteer
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.goto(placeUrl, { waitUntil: "networkidle2" });

        // Tunggu review section muncul
        await page.waitForSelector(".jftiEf");

        // Scroll biar review lebih banyak muncul
        for (let i = 0; i < 3; i++) {
            await page.evaluate(() => {
                window.scrollBy(0, window.innerHeight);
            });
            await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        // Ambil data review
        const reviews = await page.evaluate(() => {
            const reviewEls = document.querySelectorAll(".jftiEf");
            return Array.from(reviewEls).map((el) => {
                const nama = el.querySelector(".d4r55")?.textContent || "";
                const rating =
                    el.querySelector("span.kvMYJc")?.getAttribute("aria-label") || "";
                const text = el.querySelector(".wiI7pd")?.textContent || "";
                return { nama, rating, text };
            });
        });

        await browser.close();

        return res.status(200).json({ reviews });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Gagal scraping data" });
    }
}
