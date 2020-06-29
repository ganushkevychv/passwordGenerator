module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Password Generator`,
        short_name: `Pass Gen`,
        start_url: `/`,
        background_color: `#13C5DE`,
        theme_color: `#13C5DE`,
        display: `standalone`,
        icon: `src/images/password.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
