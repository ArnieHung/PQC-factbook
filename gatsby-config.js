require("dotenv").config();
const queries = require("./src/utils/algolia");

const config = require("./config");

const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
        component: require.resolve(`./src/templates/docs.js`)
    }
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`
    }
  },
  // {
  //   resolve: 'gatsby-plugin-mdx',
  //   options: {
  //     gatsbyRemarkPlugins: [
  //       {
  //         resolve: "gatsby-remark-images",
  //         options: {
  //           maxWidth: 1035,
  //           sizeByPixelDensity: true
  //         }
  //       },
  //       {
  //         resolve: `gatsby-remark-katex`,
  //         options: {
  //           // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
  //           strict: `ignore`
  //         }
  //       },
  //       {
  //         resolve: 'gatsby-remark-copy-linked-files'
  //       }
  //     ],
  //     extensions: [".mdx", ".md"]
  //   }
  // },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      gfm: true,
      footnotes: true,
      // blocks: ["h2"], Blocks option value can be provided here as an array.
      excerpt_separator: `<!-- end -->`,
      plugins: [
      {
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 1035,
          sizeByPixelDensity: true
        }
      },
        `gatsby-remark-katex`,
      ],
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
];

// check and add algolia
if (config.header.search && config.header.search.enabled && config.header.search.algoliaAppId && config.header.search.algoliaAdminKey) {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: config.header.search.algoliaAppId, // algolia application id
      apiKey: config.header.search.algoliaAdminKey, // algolia admin key to index
      queries,
      chunkSize: 10000, // default: 1000
    }}
  )
}
// check and add pwa functionality
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
      resolve: `gatsby-plugin-manifest`,
      options: {...config.pwa.manifest},
  });
  plugins.push({
    resolve: 'gatsby-plugin-offline',
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.js`),
    },
  });
} else {
  plugins.push('gatsby-plugin-remove-serviceworker');
}

// check and remove trailing slash
// if (config.gatsby && !config.gatsby.trailingSlash) {
//   plugins.push('gatsby-plugin-remove-trailing-slashes');
// }

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  trailingSlash: "always",
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: { link: config.header.logoLink ? config.header.logoLink : '/', image: config.header.logo }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins
};
