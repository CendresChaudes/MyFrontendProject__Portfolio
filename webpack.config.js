import * as pathNode from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const sourceFolder = 'source'
const buildFolder = 'dist'

const path = {
  root: pathNode.dirname(__filename),
  source: pathNode.resolve(sourceFolder),
  build: pathNode.resolve(buildFolder),
}

export const webpackConfig = (isMode) => ({
  entry: ['@babel/polyfill', `${path.source}/js/main.js`],
  mode: isMode ? 'development' : 'production',
  cache: {
    type: 'filesystem', // По умолчанию 'memory'
    cacheDirectory: `${path.root}/.temporary_cache`,
  },
  output: {
    path: `${path.build}/js`,
    filename: 'main.min.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
})
