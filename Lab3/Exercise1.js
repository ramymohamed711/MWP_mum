const dns = require('dns');
dns.resolve4('mum.edu', (err, address) => {
  console.log('address: %j', address);
});
