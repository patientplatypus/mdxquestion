// const images = require('remark-images')
// const emoji = require('remark-emoji')

// const withMDX = require('@zeit/next-mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     mdPlugins: [images, emoji]
//   }
// })

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })

const Dotenv = require('dotenv-webpack')
const images = require('remark-images')
const emoji = require('remark-emoji')
const withCSS = require('@zeit/next-css');
const path = require('path')
const withImages = require('next-images');

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji]
  }
})

module.exports =  withMDX(withImages(withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    // config.pageExtensions = ['js', 'jsx', 'md', 'mdx']

    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
})))