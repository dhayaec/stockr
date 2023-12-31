/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const NextConfig = {}

const isDev = process.env.NODE_ENV === 'development'

module.exports = isDev ? NextConfig : withPWA(NextConfig)
