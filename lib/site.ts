// The site address used for the sitemap, share previews and Google data.
// Swap it for your own domain later, or set NEXT_PUBLIC_SITE_URL on Vercel.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://haybee.vercel.app").replace(/\/$/, "");

export const site = {
    name: "Hay Bee Concepts",
    tagline: "Creative. Modern. Memorable.",
    title: "Hay Bee Concepts | Painting, Branding & Signs in Ibadan",
    description:
        "House painting, 3D wall painting, branding, signboards, neon signs, billboards, souvenirs and custom prints in Akobo, Ibadan. Order on WhatsApp.",
    phones: ["+2349038256389", "+2348153444888"],
    instagram: "https://instagram.com/haybeeconcept",
    address: {
        streetAddress: "Road G, Festac Junction, Akobo",
        addressLocality: "Ibadan",
        addressRegion: "Oyo State",
        addressCountry: "NG",
    },
};