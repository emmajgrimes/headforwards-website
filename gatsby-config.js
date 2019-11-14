const gatsbyPluginSass = require('./gatsby/gatsby-plugin-sass');
const gatsbySourceFilesystemUploads = require('./gatsby/gatsby-source-filesystem.uploads');
const gatsbySourceFilesystemPages = require('./gatsby/gatsby-source-filesystem.pages');
// const gatsbySourceFilesystemImages = require('./gatsby/gatsby-source-filesystem.images');
const gatsbyTransformerRemark = require('./gatsby/gatsby-transformer-remark');
const gatsbyPluginManifest = require('./gatsby/gatsby-plugin-manifest');
const gatsbyPluginNetlifyCms = require('./gatsby/gatsby-plugin-netlify-cms');
const gatsbyPluginSitemap = require('./gatsby/gatsby-plugin-sitemap');
const gatsbyPluginRobotsTxt = require('./gatsby/gatsby-plugin-robots-txt');
const gatsbyPluginOffline = require('./gatsby/gatsby-plugin-offline');
// const gatsbyPluginPurgecss = require('./gatsby/gatsby-plugin-purgecss');

module.exports = {
    siteMetadata: {
        siteUrl: `https://headforwards-website.netlify.com`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        { ...gatsbyPluginSass },
        `gatsby-plugin-svgr`,
        // keep as first gatsby-source-filesystem plugin for gatsby image support
        { ...gatsbySourceFilesystemUploads },
        { ...gatsbySourceFilesystemPages },
        // { ...gatsbySourceFilesystemImages },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        { ...gatsbyTransformerRemark },
        'gatsby-transformer-yaml',
        'gatsby-transformer-json',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data`,
            },
        },
        `gatsby-transformer-remark-linked-pages`,
        `gatsby-transformer-yaml-menu`,
        // must be after other CSS plugins
        // { ...gatsbyPluginPurgecss },
        { ...gatsbyPluginManifest },
        { ...gatsbyPluginOffline },
        { ...gatsbyPluginNetlifyCms },
        // make sure to keep it last in the array
        { ...gatsbyPluginSitemap },
        { ...gatsbyPluginRobotsTxt },
        `gatsby-plugin-netlify-cache`,
        'gatsby-plugin-netlify',
    ],
};
