import { services } from "@/lib/data";
import { SITE_URL, site } from "@/lib/site";

// Structured data so Google can show the business details (phone, address, services) in results and Maps panels.
export default function JsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HousePainter"],
        "@id": `${SITE_URL}/#business`,
        name: site.name,
        slogan: site.tagline,
        description: site.description,
        url: SITE_URL,
        telephone: site.phones[0],
        image: `${SITE_URL}/images/house.jpg`,
        logo: `${SITE_URL}/images/logo.png`,
        address: { "@type": "PostalAddress", ...site.address },
        areaServed: { "@type": "City", name: "Ibadan" },
        sameAs: [site.instagram],
        contactPoint: site.phones.map((telephone) => ({
            "@type": "ContactPoint",
            telephone,
            contactType: "customer service",
            availableLanguage: "English",
        })),
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: services.map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
            })),
        },
    };

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}