// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
    return[
      {
        source: "/.well-known/farcaster.json",
        destination: 
        "https://api.farcaster.xyz/miniapps/hosted-manifest/01998e9b-336a-75dc-8f92-ffc09c0564fa",
        permanent:false,
      },
    ];
  }
};

export default nextConfig;