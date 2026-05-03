export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    slug: "adaeze-n",
    name: "Adaeze Nwosu",
    role: "Executive Director",
    bio: "Twenty years building community-led programs across West Africa.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop",
  },
  {
    slug: "marcus-t",
    name: "Marcus Tate",
    role: "Director of Programs",
    bio: "Designs the partnership model that powers every program we fund.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop",
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
