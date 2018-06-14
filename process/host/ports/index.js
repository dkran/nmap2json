const inspect = require('util').inspect,
  processScript = require('./script')

const processPorts = (ports)=>{
  var newports = {ports: []}, length = ports[0]
  if(ports[0].extraports){
    newports.extraports = ports[0].extraports[0].$
    if(ports[0].extraports[0].extrareasons) newports.extrareasons = ports[0].extraports[0].extrareasons[0].$
  }
  if(ports[0].port){
    for(var i = 0; i < ports[0].port.length; i++){
      newports.ports[i] = {}
      if(ports[0].port[i].$) newports.ports[i].port = ports[0].port[i].$
      if(ports[0].port[i].state) newports.ports[i].state = ports[0].port[i].state[0].$
      if(ports[0].port[i].cpe) newports.ports[i].cpe = ports[0].port[i].state[0].cpe[0]
      if(ports[0].port[i].script) newports.ports[i].script = processScript(ports[0].port[i].script)
    }
  }
  
  return newports
}

module.exports = processPorts
