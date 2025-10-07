// components/Schema.js
export default function Schema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": "Pondok Jepun Homestay",
        "image": "https://pondokjepun.com/images/homestay.jpg",
        "logo": "https://pondokjepun.com/favicon.ico",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sumberrejo, Banyuwangi Sub-District, Banyuwangi Regency, East Java",
            "addressLocality": "Banyuwangi",
            "addressRegion": "Jawa Timur",
            "postalCode": "68491",
            "addressCountry": "ID"
        },
        "telephone": "+6282132487131",
        "url": "https://pondokjepun.com",
        "priceRange": "Rp500.000",
        "sameAs": [
            "https://www.instagram.com/pondok_jepun25",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
