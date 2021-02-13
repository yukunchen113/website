module.exports = {
  siteMetadata: {
    title: `Yukun Chen`,
    description: `Yukun Chen's personal website`,
    author: `@yukunchen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-remark-katex`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins:[
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          }
        ],
        remarkPlugins: [
          require("remark-math"), 
          require("remark-html-katex")],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/single_node.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
