export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    slug: "esther-a",
    name: "Dr. Esther Ehu Annan",
    role: "Chief Executive Officer",
    bio: "Leads ANNFAM Foundation's mission to empower lives through education, mentorship, and community outreach.",
    image: "/uploads/ceo.jpg",
  },
  {
    slug: "samuel-a",
    name: "Agyapong Akwasi Samuel",
    role: "Deputy CEO",
    bio: "The bridge between strategy and execution — making sure our vision reaches every community we serve.",
    image: "/uploads/deputy-ceo.jpg",
  },
  {
    slug: "linh-v",
    name: "Linh Vu",
    role: "Head of Operations",
    bio: "Keeps the engine running so the field teams can do the real work.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop",
  },
  {
    slug: "kwame-o",
    name: "Kwame Otieno",
    role: "Field Lead, East Africa",
    bio: "Lives in Nairobi, partners with 22 community programs across the region.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=750&fit=crop",
  },
];
