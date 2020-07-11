/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const url = require('url');

exports.createPages = ({ actions: { createPage } }) => {
  const manifest = url.parse("/manifest.webmanifest");
  //createPage(manifest);
}
