/** @type {import('next').NextConfig} */
const githubPagesBasePath =
  process.env.GITHUB_PAGES === 'true' ? '/head-honcho-net' : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(githubPagesBasePath && { basePath: githubPagesBasePath }),
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPagesBasePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
