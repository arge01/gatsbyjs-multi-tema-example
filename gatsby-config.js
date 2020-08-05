require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  //assetPrefix: `http://192.168.1.105:8500`, //gatsby build --prefix-paths
  pathPrefix: "/",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `manifest`,
        path: `${__dirname}`,
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "swapi",
        // Url to query from
        url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`, //highlight-line
        headers: {
          Authorization: `Bearer 85d57138216d58168bb4d633f2e8a1549e6ec105`,
        },
      },
    },
  ],
}
