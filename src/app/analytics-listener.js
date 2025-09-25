"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

export default function AnalyticsListener() {
    const pathname = usePathname();

    useEffect(() => {
        let retryTimeout;

        const sendPageview = (url) => {
            if (typeof window.gtag === "function") {
                gtag.pageview(url);
                console.log("✅ Tracked pageview:", url);
            } else {
                console.warn("⚠️ gtag belum siap, retry dalam 1 detik:", url);
                retryTimeout = setTimeout(() => sendPageview(url), 1000);
            }
        };

        if (pathname) {
            sendPageview(pathname);
        }

        return () => clearTimeout(retryTimeout);
    }, [pathname]);

    return null;
}
