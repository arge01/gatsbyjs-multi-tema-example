/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const os = require('os');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Data can come from anywhere, but for now create it manually
  const myData = {
    arch: os.arch(),
    cpus: os.cpus(),
    totalmem: os.totalmem(),
    osVersion: os.version(),
    info: os.userInfo(),
    mac: os.networkInterfaces(),
    panel: os.hostname()
  };

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
