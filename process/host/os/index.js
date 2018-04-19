const _ = require('lodash')
const processPortUsed = require('./portused')
const processMatch = require('./osmatch')
const processOSFingerprint = require('./osfingerprint'),
  inspect = require('util').inspect

const processOS = (os) => {
  var hosts = []
  for(var i = 0; i < os.length; i++){
    if(os[i]){
      var newHost = {}
      if(os[i].portused) newHost.portused = processPortUsed(os[i].portused)
      if(os[i].osmatch) newHost.osmatch = processMatch(os[i].osmatch)
      if(os[i].osclass) console.log(inspect(os[i].osclass, false, null))
      if(os[i].osfingerprint) newHost.osfingerprint = processOSFingerprint(os[i].osfingerprint)
      hosts.push(newHost)
    }
  }
  if(hosts.length === 1) return hosts[0]
  return hosts
}

module.exports = processOS