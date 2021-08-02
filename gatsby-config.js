const gatsbyPluginSass = require('./gatsby/gatsby-plugin-sass');
const gatsbySourceFilesystemUploads = require('./gatsby/gatsby-source-filesystem.uploads');
const gatsbySourceFilesystemImages = require('./gatsby/gatsby-source-filesystem.images');
const gatsbySourceFilesystemPages = require('./gatsby/gatsby-source-filesystem.pages');
const gatsbySourceFilesystemData = require('./gatsby/gatsby-source-filesystem.data');
const gatsbyTransformerRemark = require('./gatsby/gatsby-transformer-remark');
const gatsbyPluginManifest = require('./gatsby/gatsby-plugin-manifest');
const gatsbyPluginNetlifyCms = require('./gatsby/gatsby-plugin-netlify-cms');
const gatsbyPluginSitemap = require('./gatsby/gatsby-plugin-sitemap');
const gatsbyPluginRobotsTxt = require('./gatsby/gatsby-plugin-robots-txt');
const gatsbyPluginOffline = require('./gatsby/gatsby-plugin-offline');
const gatsbyPluginGoogleTagmanger = require('./gatsby/gatsby-plugin-google-tagmanager');
const gatsbyPluginNetlify = require('./gatsby/gatsby-plugin-netlify');
const gatsbyPluginForceTrailingSlashes = require('./gatsby/gatsby-plugin-force-trailing-slashes');
const gatsbyTransformerSharp = require('./gatsby/gatsby-transformer-sharp');

const sitePassword = process.env.SITE_PASSWORD || null;
const siteMetadata = {
    siteUrl: `https://www.headforwards.com`,
};
const plugins = [
    `gatsby-source-recruitee-api`,
    { ...gatsbySourceFilesystemImages },
    { ...gatsbySourceFilesystemUploads },
    { ...gatsbySourceFilesystemPages },
    { ...gatsbySourceFilesystemData },

    { ...gatsbyTransformerSharp },
    { ...gatsbyTransformerRemark },
    'gatsby-transformer-yaml',
    'gatsby-transformer-json',

    { ...gatsbyPluginSass },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    `gatsby-plugin-svgr`,

    { ...gatsbyPluginForceTrailingSlashes },
    { ...gatsbyPluginSitemap },
    { ...gatsbyPluginRobotsTxt },
//     { ...gatsbyPluginGoogleTagmanger },

    { ...gatsbyPluginManifest },
    { ...gatsbyPluginOffline },

    { ...gatsbyPluginNetlifyCms },

    { ...gatsbyPluginNetlify },
];

sitePassword &&
    plugins.push({
        resolve: '@mkitio/gatsby-theme-password-protect',
        options: {
            password: sitePassword, // delete or `undefined` to disable password protection
        },
    });

module.exports = {
    siteMetadata,
    plugins,
};
