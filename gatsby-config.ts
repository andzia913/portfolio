import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },

  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["NODE_ENV", "NASA_API_KEY"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Angelika Szczerbowska`,
        short_name: `Portfolio`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};

export default config;
