/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fetch = require(`node-fetch`);

// You can delete this file if you're not using it
/*
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Data can come from anywhere, but for now create it manually
  const myData = {
    //your data
  }

  const nodeContent = JSON.stringify(myData);

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyNodeType`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData)
    }
  };

  const node = Object.assign({}, myData, nodeMeta);
  createNode(node);
};
*/

/*exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  const randomApis = await fetch(
    `https://randomuser.me/api/`,
    { method: "GET" },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  const randomApi = await randomApis.json();
  createNode({
    allData: randomApi,
    id: `random-user-api-graphql-data`,
    internal: {
      type: `randomApi`,
      contentDigest: createContentDigest(randomApi),
    },
  })
}*/
