/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
dotenvLoad()
const withNextEnv = nextEnv()
module.exports = withNextEnv()
// module.exports = (phase, { defaultConfig }) => {

//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       ...defaultConfig,
//       /* development only config options here */
//       webpack: {
//         plugins: [new BundleAnalyzerPlugin()]

//       },
//     }
//   }
//   /* config options for all phases except development here */
//   return defaultConfig
// }
