/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.swappie.com",
			},
			{
				protocol: "https",
				hostname: "p7.hiclipart.com",
			},
			{
				protocol: "https",
				hostname: "www.pikpng.com",
			},
			{
				protocol: "https",
				hostname: "banner2.cleanpng.com",
			},
			{
				protocol: "https",
				hostname: "m.media-amazon.com",
			},
			{
				protocol: "https",
				hostname: "www.citypng.com",
			},
			{
				protocol: "https",
				hostname: "assets.techrepublic.com",
			},
			{
				protocol: "https",
				hostname: "www.apple.com",
			},
			{
				protocol: "https",
				hostname: "store.storeimages.cdn-apple.com",
			},
		],
	},
};

export default nextConfig;
