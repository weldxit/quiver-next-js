
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images:{
    remotePatterns:[
        {
            protocol:'https',
            hostname:'firebasestorage.googleapis.com'
        }
    ]
}
});