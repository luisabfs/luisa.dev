// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
      domains: ['images.unsplash.com', 'images.pexels.com', 'cdn.pixabay.com', 'www.pexels.com'],
    },
}

module.exports = nextConfig;
