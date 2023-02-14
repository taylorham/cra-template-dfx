const webpack = require('webpack')
const path = require('path')
const generateAliases = require('./config/generateAliases').default
const generateAliases = require('./config/generateAliases').default
const { initCanisterIds } = require('./config/initCanisterIds')

const canisters = initCanisterIds()

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          const aliases = generateAliases()

          return {
            ...webpackConfig,
            plugins: [
              ...webpackConfig.plugins,
              new webpack.ProvidePlugin({
                ic: [path.resolve(path.join(__dirname, 'ic.js')), 'ic'],
              }),
              new webpack.EnvironmentPlugin({
                NODE_ENV: 'development',
                TEST_CANISTER_ID: canisters['test'],
              }),
            ],
            resolve: {
              ...webpackConfig.resolve,
              alias: { ...webpackConfig.resolve.alias, ...aliases },
              extensions: [
                ...webpackConfig.resolve.extensions,
                '.tsx',
                '.ts',
                '.js',
              ],
              plugins: [
                ...webpackConfig.resolve.plugins.filter((t) => {
                  // Removes ModuleScopePlugin
                  return !Object.keys(t).includes('appSrcs')
                }),
              ],
            },
          }
        },
      },
      options: {},
    },
  ],
}
