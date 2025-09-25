export const GA_TRACKING_ID = "G-R3ENRZV2L8";

// Pageview
export const pageview = (url) => {
    if (typeof window.gtag === "function") {
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Event tracking
export const event = ({ action, category, label, value }) => {
    if (typeof window.gtag === "function") {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};
