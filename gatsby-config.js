require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Yuce Yazılım / Project B2B`,
    description: `Bu bir b2b projesidir.`,
    author: `Yuce Yazilim`,
    siteUrl: 'http://www.yuceyazilim.com.tr/',
    license: 'MIT'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yuce Yazılım / Project B2B`,
        project: 'B2B',
        author: 'Yuce Yazılım',
        author_link: 'yuceyazilim.com.tr',
        short_name: `yuce-yazilim-b2b`,
        start_url: `/`,
        licence: `MIT`
      },
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
