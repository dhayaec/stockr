/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
}

const isDev = process.env.NODE_ENV === 'development'

module.exports = isDev ? NextConfig : withPWA(NextConfig)
