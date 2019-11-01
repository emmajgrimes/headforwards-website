const gatsbyPluginSass = require('./gatsby/gatsby-plugin-sass');
const gatsbySourceFilesystemUploads = require('./gatsby/gatsby-source-filesystem.uploads');
const gatsbySourceFilesystemPages = require('./gatsby/gatsby-source-filesystem.pages');
const gatsbySourceFilesystemImages = require('./gatsby/gatsby-source-filesystem.images');
const gatsbyTransformerRemark = require('./gatsby/gatsby-transformer-remark');
const gatsbyTransformerYaml = require('./gatsby/gatsby-transformer-yaml');
const gatsbyPluginNetlifyCms = require('./gatsby/gatsby-plugin-netlify-cms');
// const gatsbyPluginPurgecss = require('./gatsby/gatsby-plugin-purgecss');

module.exports = {
    siteMetadata: {},
    plugins: [
        'gatsby-plugin-react-helmet',
        { ...gatsbyPluginSass },
        `gatsby-plugin-svgr`,
        // keep as first gatsby-source-filesystem plugin for gatsby image support
        { ...gatsbySourceFilesystemUploads },
        { ...gatsbySourceFilesystemPages },
        { ...gatsbySourceFilesystemImages },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        { ...gatsbyTransformerRemark },
        `gatsby-transformer-remark-linked-pages`,
        { ...gatsbyTransformerYaml },
        `gatsby-transformer-yaml-menu`,
        { ...gatsbyPluginNetlifyCms },
        // must be after other CSS plugins
        // {...gatsbyPluginPurgecss},
        // make sure to keep it last in the array
        'gatsby-plugin-netlify',
    ],
};
