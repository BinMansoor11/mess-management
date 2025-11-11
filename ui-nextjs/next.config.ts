const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/mess-management" : "",
  assetPrefix: isGithubPages ? "/mess-management/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
