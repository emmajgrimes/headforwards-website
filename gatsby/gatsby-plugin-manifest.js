module.exports = {
    resolve: `gatsby-plugin-manifest`,
    options: {
        name: 'Headforwards',
        short_name: 'Headforwards',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFB800',
        display: 'standalone',
        icon: 'static/images/brand/headforwards-emblem.black.svg',
        icon_options: {
          purpose: `any maskable`,
        }
        crossOrigin: `use-credentials`,
    },
};
