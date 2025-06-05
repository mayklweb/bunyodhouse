/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "gsap",
      "swiper",
      "panolens",
      "three",
      "lucide-react",
    ],
    optimisticClientCache: true,
    optimizeCss: true, // Note it's optimizeCss (with one 's') in newer versions
    serverComponentsExternalPackages: ["compression"], // If you need server components to use this
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      minify: true,
      transpileTemplateLiterals: true,
      pure: true,
      cssProp: true,
    },
  },
};

export default nextConfig;
