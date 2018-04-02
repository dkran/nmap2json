const _ = require('lodash')
const processPortUsed = require('./portused')
const processMatch = require('./osmatch')
const processOSFingerprint = require('./osfingerprint')

const processOS = (os) => {
  if(os){
    var newHost = {}
    if(os){
      if(os.portused) newHost.portused = processPortUsed(os.portused)
      if(os.osmatch) newHost.osmatch = processMatch(os.osmatch)
      if(os.osfingerprint) newHost.osfingerprint = processOSFingerprint(os.osfingerprint)
    }
    return newHost
  }
}

module.exports = processOS