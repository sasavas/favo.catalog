module.exports = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  reactStrictMode: true,
  env: {
    API_ROUTE: process.env.API_ROUTE,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
  },
};
