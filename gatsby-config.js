module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    subtitle: `Data fetched from private wordpress api`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-wordpress",

      options: {
        baseUrl: "jordanov.info/zone/",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      }
    }
  ],
}
