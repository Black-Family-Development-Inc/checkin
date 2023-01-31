require("dotenv").config();
import type { GatsbyConfig } from "gatsby";
import { color } from "./src/styles/theme";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BFDI`,
    siteUrl: process.env.SITE_NAME,
  },
  // add temporary path prefix, remove when moving to subdomain
  pathPrefix: "/hopeishere",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TAG],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        environment: process.env.ENVIRONMENT_ID ?? `master`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap%27);`,
          },
          {
            name: `Roboto`,
            file: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap%27);",
          },
          {
            name: `Rubik`,
            file: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap%27);",
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hope is Here at BFDI`,
        short_name: `Hope Is Here`,
        // eslint-disable-next-line max-len
        description: `Check in on your mental health with BFDI's Hope is Here app.`,
        start_url: `/`,
        background_color: `${color.teal.five}`,
        theme_color: `${color.purple.two}`,
        display: `standalone`,
        icon: `src/images/bfdi-logo-favicon.png`,
        icons: [
          {
            src: `/favicons/bfdi-logo-favicon.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/bfdi-logo-favicon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: `*`, disallow: [`/`] }],
      },
    },
  ],
};

export default config;
