import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },

  graphqlTypegen: true,
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-image`, `gatsby-plugin-sharp`],
};

export default config;
