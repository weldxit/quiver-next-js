// 

const withPWA = require("next-pwa")({
    dest : "public",
    register : true,
    skipWaiting : true
  })
  const nextConfig = withPWA({
    reactStrictMode: true,
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'firebasestorage.googleapis.com'
            }
        ]
    }
  }
  )
  module.exports = nextConfig