/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false, // 圧縮無効
          },
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true, // importした画像の型定義設定を無効にする
  },
};

module.exports = nextConfig
