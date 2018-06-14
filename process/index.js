const runstats = require('./runstats')
const processHost = require('./host')
const _ = require('lodash'),
 inspect = require('util').inspect


module.exports = (nm) => {
  var ip = {}
  _.forIn(nm, function (base, key) {
    if(key === '$') ip.scan = nm.$
    if(key === 'host') ip.host = processHost(nm.host[0])
    if(key === 'runstats') ip.runstats = runstats(nm.runstats)
  })
  return ip
}