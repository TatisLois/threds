const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withTM = require('next-transpile-modules')([
  'common',
  '@gorhom/bottom-sheet',
  '@gorhom/portal',
  'dripsy',
  '@dripsy/core'
])

const nextConfig = {
  images: {
    disableStaticImages: true
  }
}

module.exports = withPlugins(
  [
    withTM,
    withFonts,
    withImages,
    withBundleAnalyzer,
    [withExpo, { projectRoot: __dirname + '/../..' }]
  ],
  nextConfig
)
