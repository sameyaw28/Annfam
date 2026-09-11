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
      // /programs was replaced by /events. Old links land on the home page so
      // visitors start at the top of the site rather than mid-way into Events.
      // Kept temporary (307) so browsers don't cache the hop indefinitely —
      // a permanent 308 here would be near-impossible to change later.
      { source: "/programs", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
