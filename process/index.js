const runstats = require('./runstats')
const processHost = require('./host')
const _ = require('lodash')


module.exports = (nm) => {
  const baseKeys = _.keys(nm)
  var ip = {}
  var count = 0;
  _.forIn(nm, function (base, key) {
    if(key === '$') ip.scan = nm.$
    if(key === 'host') ip.host = processHost(nm.host[0])
    if(key === 'runstats') ip.runstats = runstats(nm.runstats)
  })
  return ip
}