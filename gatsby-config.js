module.exports = {
  siteMetadata: {
    title: "Yukun Chen",
    description: `Yukun Chen's personal website`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    `gatsby-remark-katex`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins:[
          {
            resolve: `gatsby-remark-katex`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              quality: 100,
            },
          }
        ],
        remarkPlugins: [
          require("remark-math"), 
          require("remark-html-katex")],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/pages/",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yukun-chen`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/single_node.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};
