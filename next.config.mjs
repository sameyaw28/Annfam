/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // /programs was replaced by /events — keep old links and search results working.
      { source: "/programs", destination: "/events", permanent: true },
    ];
  },
};

export default nextConfig;
