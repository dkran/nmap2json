var inspect = require('util').inspect

const processPorts = (ports)=>{
  var newports = {}, length = ports[0]
  if(ports[0].extraports) newports.extraports = ports[0].extraports
  for(var i = 0; i < ports[0].port.length; i++){
    console.log(inspect(ports[0].port[i], false, 10))
  }
}

module.exports = processPorts
