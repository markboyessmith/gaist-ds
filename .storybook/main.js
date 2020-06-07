

const jsonImporter = require('node-sass-json-importer');
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.js', '../examples/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sassOptions: {
                importer: jsonImporter(),
                includePaths: [
                  path.resolve(__dirname, 'node_modules'),
                  path.resolve(__dirname, '../../../node_modules')
                ],
              }
            },
          }
        ],
        include: path.resolve(__dirname, '../')
      })
      
      return config
    }
};

 // addons: [
  //   '@storybook/addon-backgrounds/register',
  //   '@storybook/addon-docs',
  //   '@storybook/addon-knobs/register',
  //   './.storybook/addons/html-source/register.js'
  // ],
  
  