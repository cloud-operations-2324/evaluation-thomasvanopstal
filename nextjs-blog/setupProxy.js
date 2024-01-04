// // setupProxy.js
// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api", // the path you want to proxy
//     createProxyMiddleware({
//       target: "https://openfaas.81.co.ucll.cloud",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "/function", // Forward requests to /api to /function in the OpenFaaS gateway
//       },
//     })
//   );
// };
