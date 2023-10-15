/** @type {import('next').NextConfig} */

// import { withContentlayer } from 'next-contentlayer/.'
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: {
    removeConsole: false,
  },
};

// export default withContentlayer({nextConfig})
module.exports = withContentlayer({ ...nextConfig });
