/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.public.blob.vercel-storage.com',
				pathname: '/**',
			},
		],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.webmanifest$/,
			use: {
				loader: 'file-loader',
				options: {
					name: 'site.webmanifest',
					publicPath: '/_next/static/files',
					outputPath: 'static/files/',
				},
			},
		});
		return config;
	},
};

module.exports = nextConfig;
