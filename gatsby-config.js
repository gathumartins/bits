const path = require(`path`)
module.exports = {
  siteMetadata: {
    siteUrl: "https://dawn.nairobits.com",
    title: "nairobits",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg', 'png', 'jpg', 'jpeg'],
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://dawn.nairobits.com/graphql",
        schema: {
          perPage: 25,
          requestConcurrency: 1,
          previewRequestConcurrency: 1,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-postcss",
  ],
};
