const localtunnel = require('localtunnel');

(async () => {
    const randomNumber=Math.trunc(Math.random()*999999)
  const tunnel = await localtunnel({ port: 3000, subdomain:"expressfile"+randomNumber });
  console.log(tunnel.url);

  tunnel.on('close', () => {
    console.log('tunnel closed')
  });
})();