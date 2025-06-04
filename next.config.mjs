/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
    optimizePackageImports: ['gsap', 'swiper', 'panolens', 'three', 'next', 'compression', 'lucide-react', '@tailwindcss/postcss', 'tailwindcss'],
    optimisticClientCache: true,
    optimizeCss: true,
    optimizeServerReact: true
  },
}

export default nextConfig