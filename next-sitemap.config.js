/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pondokjepun.com", // 🌐 Domain utama website kamu
  generateRobotsTxt: true, // 🔧 Otomatis buat robots.txt
  sitemapSize: 7000, // Maksimum URL per file sitemap
  changefreq: "weekly", // Google disarankan crawl tiap minggu
  priority: 0.8, // Prioritas default setiap halaman
  autoLastmod: true, // Tambahkan tanggal update terakhir otomatis

  // ✅ Tidak ada halaman yang dikecualikan (semua bisa diindeks)
  exclude: [],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*", // Berlaku untuk semua bot mesin pencari
        allow: "/", // Izinkan semua halaman diindeks
      },
    ],
  },
};
