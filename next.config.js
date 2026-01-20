/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment with custom domain
  // If you're deploying to username.github.io/repo-name, uncomment and set basePath
  // basePath: '/repo-name',
}

module.exports = nextConfig
