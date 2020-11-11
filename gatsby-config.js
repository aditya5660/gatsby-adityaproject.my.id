/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Aditya Project`,
    author: `Aditya Putra`,
    firstName: `Aditya`,
    lastName: `Putra`,
    description: `Aditya Putra's personal site`,
    occupation: `Software Engineer`,
    keywords: [
      `Aditya Putra`, 
      `Aditya Project`,
      `Aditya Putra Setiawan`, 
      `Web Developer`, 
      `Laravel Developer`, 
      `PHP Developer`, 
      `Go Developer`, 
      `System Integrator`, 
      `Blog`, 
      `Resume`, 
      `Projects`, 
      `Work`
    ],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    designations: [
      `Web Developer`,
      `Coffe Addict`,
      `Audio Enthusiast`,
    ],
    readingList: [
      {
        title: `Rich Dad Poor Dad`,
        author: `Robert T Kiyosaki`,
        link: `https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad`,
      },
      {
        title: `Rich Dad's Cashflow Quadrant`,
        author: `Robert T Kiyosaki`,
        link: `https://www.goodreads.com/book/show/81922.Rich_Dad_s_Cashflow_Quadrant`,
      },
      {
        title: `Bicara Itu Ada Seninya`,
        author: `Oh Su Hyang,Asti Ningsih`,
        link: `https://www.goodreads.com/book/show/43397364-bicara-itu-ada-seninya`,
      },
    ],
    showsList: [
      {
        title: `Cek Toko Sebelah`,
        author: `Ernest Prakasa`,
        link: `https://www.imdb.com/title/tt6366854/`,
      },
      {
        title: `Imperfect`,
        author: `Ernest Prakasa`,
        link: `https://www.imdb.com/title/tt10932100/`,
      },
      {
        title: `My Stupid Boss`,
        author: `Upi Avianto`,
        link: `https://www.imdb.com/title/tt5514296/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aditya Putra's Personal Site`,
        short_name: `adityaproject`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
