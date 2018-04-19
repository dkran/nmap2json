const processOS = require('./os'),
  processStatus = require('./status'),
  processAddress = require('./address'),
  processHostnames = require('./hostnames'),
  processPorts = require('./ports'),
  processUptime = require('./uptime'),
  processDistance = require('./distance'),
  processTCPSequence = require('./tcpsequence'),
  processIpId = require('./ipidsequence'),
  processTCPTS = require('./tcptssequence'),
  processHS = require('./hostscript')
  processTrace = require('./trace')
  processTimes = require('./times')
  _ = require('lodash')

const processHost = (host) =>{
  console.log(_.keys(host))
  var hostInfo = {}
  hostInfo.os = processOS(host.os)
  hostInfo.status = processStatus(host.status)
  hostInfo.address = processAddress(host.address)
  hostInfo.hostnames = processHostnames(host.hostnames)
  hostInfo.ports = processPorts(host.ports)
  hostInfo.uptime = processUptime(host.uptime)
  hostInfo.distance = processDistance(host.distance)
  hostInfo.tcpsequence = processTCPSequence(host.tcpsequence)
  hostInfo.ipidsequence = processIpId(host.ipidsequence)
  hostInfo.tcptssequence = processTCPTS(host.tcptssequence)
  hostInfo.hostscript = processHS(host.hostscript)
  hostInfo.times = processTimes(host.times)
  hostInfo.trace = processTrace(host.trace)
  return hostInfo
}

module.exports = processHost