/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: false,
	},
	images: {
		domains: ['cdn.sanity.io'],
	},
}

module.exports = nextConfig
