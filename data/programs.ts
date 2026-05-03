export type Program = {
  slug: string;
  title: string;
  category: "Education" | "Health" | "Community" | "Sustainability";
  location: string;
  summary: string;
  image: string;
};

export const featuredPrograms: Program[] = [
  {
    slug: "lighthouse-scholars",
    title: "Lighthouse Scholars",
    category: "Education",
    location: "Lagos, Nigeria",
    summary:
      "Full-ride scholarships and mentorship for first-generation university students.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
  },
  {
    slug: "clear-waters",
    title: "Clear Waters Initiative",
    category: "Health",
    location: "Rural Kenya",
    summary:
      "Solar-powered wells and hygiene training reaching 84 villages and counting.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80",
  },
  {
    slug: "rooted-farms",
    title: "Rooted Farms",
    category: "Sustainability",
    location: "Oaxaca, Mexico",
    summary:
      "Climate-resilient cooperatives that triple smallholder farmers' annual yield.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80",
  },
];
