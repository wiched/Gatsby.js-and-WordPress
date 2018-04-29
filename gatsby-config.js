module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    subtitle: `Data fetched from private wordpress api`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
