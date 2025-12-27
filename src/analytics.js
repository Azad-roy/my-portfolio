// src/analytics.js
export const pageView = (url) => {
    if (window.gtag) {
        window.gtag("config", "G-9ZT844YWZN", {
            page_path: url,
        });
    }
};
