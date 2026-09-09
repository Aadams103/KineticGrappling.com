import { siteConfig, type FAQ } from "./site-config";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SportsActivityLocation", "LocalBusiness"],
        "@id": `${siteConfig.url}/#academy`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        image: `${siteConfig.url}/images/hero-bjj-training.jpg`,
        priceRange: "$80–$275 per month",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          addressCountry: "US",
        },
        areaServed: siteConfig.serviceAreas.map((name) => ({ "@type": "Place", name })),
        sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Martial arts programs", itemListElement: programsCatalog() },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/kinetic-grappling-logo.png`,
        location: { "@id": `${siteConfig.url}/#academy` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}

function programsCatalog() {
  return [
    "Kids Brazilian Jiu-Jitsu",
    "Adult Brazilian Jiu-Jitsu",
    "No-Gi Grappling",
    "Competition Training",
    "Private Lessons",
    "Wrestling",
    "MMA",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      description: `${name} at Kinetic Grappling in College Station, TX`,
    },
  }));
}

export function getFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
