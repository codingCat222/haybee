export type Category = "painting" | "branding" | "gifts";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  description: string;
  image: string;
};

export const contact = {
  phone: "0815 344 4888",
  phoneHref: "tel:+2348153444888",
  whatsapp: "0903 825 6389",
  instagram: "@haybeeconcept",
  instagramHref: "https://instagram.com/haybeeconcept",
  address: "Road G, Festac Junction, Akobo, Ibadan",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  "House Painting",
  "Screen Painting",
  "Award Plaque",
  "Frames",
  "Branding",
  "Souvenirs",
  "Sign Board",
  "Neon Sign",
  "Bill Board",
  "3D Wall Painting",
  "Logo Creating",
  "General Artwork",
];

export const projects: Project[] = [
  { slug: "house-painting", title: "House Painting", category: "painting", description: "Clean, lasting finishes for homes and estates.", image: "/images/house.jpg" },
  { slug: "wall-art", title: "3D Wall Art", category: "painting", description: "Portrait and 3D art that turns a plain wall into the feature of the room.", image: "/images/wall-art.jpg" },
  { slug: "event-branding", title: "Event Branding", category: "branding", description: "Event shirts printed with names, dates and logos.", image: "/images/branding.jpg" },
  { slug: "mugs", title: "Custom Mugs", category: "branding", description: "Mugs printed with names, logos and messages.", image: "/images/mugs.jpg" },
  { slug: "frames", title: "Photo Frames", category: "gifts", description: "Gold-framed portrait prints for the home, or as a gift.", image: "/images/frames.jpg" },
  { slug: "cushions", title: "Photo Cushions", category: "gifts", description: "Custom cushions for birthdays and celebrations.", image: "/images/cushion.jpg" },
  { slug: "gift-sets", title: "Gift Sets", category: "gifts", description: "Birthday gift sets with a personal message.", image: "/images/gift-set.jpg" },
];

// TODO: replace with real customer reviews before launch.
export const reviews = [
  { quote: "[Customer review goes here]", name: "[Customer name]", project: "[Project]" },
  { quote: "[Customer review goes here]", name: "[Customer name]", project: "[Project]" },
  { quote: "[Customer review goes here]", name: "[Customer name]", project: "[Project]" },
];

// Add more clips here. Portrait phone videos work best.
// preview = short silent loop shown on the page, full = the one that opens with sound.
export const videos = [
  {
    slug: "banner-printing",
    title: "Large-format banner printing",
    caption: "A salon banner coming off the printer.",
    poster: "/videos/banner-printing-poster.jpg",
    preview: "images/videos/banner-printing.mp4",
    full: "/videos/banner-printing.mp4",
  },
];