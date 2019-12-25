/* eslint-disable */

const nextConfig = {
  target: 'serverless',
  env: {
    AIRTABLE_API_KEY: process.env['AIRTABLE_API_KEY'],
    SAWERIA_ALERTS_API: process.env['SAWERIA_ALERTS_API']
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: fileName => (fileName.includes('node_modules') ? 'global' : 'scoped')
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
