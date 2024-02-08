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
  ],
};

export default config;
