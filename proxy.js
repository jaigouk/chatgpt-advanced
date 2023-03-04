const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

http.createServer((req, res) => {
  const url = req.url.slice(1);
  proxy.web(req, res, {
    target: url,
    changeOrigin: true,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      referer: 'https://www.google.com/',
      'Access-Control-Allow-Origin': '*', // add this line to enable CORS
    },
  });

  // add the following lines to set the appropriate headers for CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
}).listen(8888);
