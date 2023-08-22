const { withPlugins } = require('next-compose-plugins');
const withPWA = require('next-pwa');
const typescript = require('typescript');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: '/fcmtoken',
        destination: 'http://front.cau-likelion.org/fcmtoken',
      },
    ];
  },
};
module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
        },
      },
    ],
    [
      typescript,
      {
        typescriptLoaderOptions: {
          transpileOnly: false,
        },
      },
    ],
  ],
  nextConfig
);
