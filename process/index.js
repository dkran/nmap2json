const runstats = require('./runstats')
const processHost = require('./host')
const _ = require('lodash')


module.exports = (nm) => {
  const baseKeys = _.keys(nm)
  console.log(baseKeys)
  var ip = {}
  _.forEach(baseKeys, function (base) {
    if (base === '$') ip.scan = nm[base]
    if (base === 'host') ip.host = processHost(nm.host[0])
    if (base === 'runstats') ip.runstats = runstats(nm.runstats)
  })
  return ip
}