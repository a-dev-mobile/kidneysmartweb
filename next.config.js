/** @type {import('next').NextConfig} */
const isLocalBuild = process.env.IS_LOCAL === "true";
const nextConfig = {
  basePath: isLocalBuild ? "" : "/kidneysmart",
  output: "export",
};

module.exports = nextConfig
