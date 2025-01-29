const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Enable CORS for all requests
app.use(cors());

// Proxy middleware setup
app.use(
  "/api", // this is the local API endpoint you'll use in your fetch requests
  createProxyMiddleware({
    target: "https://apis.ccbp.in", // API base URL you are targeting
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // Rewrite the URL to remove '/api' prefix
    },
  })
);

// Start the server on port 5000
app.listen(5000, () => {
  console.log("Proxy server is running on http://localhost:5000");
});