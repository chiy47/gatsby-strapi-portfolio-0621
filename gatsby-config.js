/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Chi Portfolio`,
    description: `Chi Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | Chi Portfolio`,
    image: `/hero.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`job`, `project`],
        //If using single types place them in this array.
        // singleTypes: [`about`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
}
