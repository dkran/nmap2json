const processOS = require('./os'),
  processStatus = require('./status'),
  processAddress = require('./address'),
  processHostnames = require('./hostnames'),
  processPorts = require('./ports'),
  processUptime = require('./uptime'),
  processDistance = require('./distance'),
  processTCPSequence = require('./tcpsequence'),
  processIpId = require('./ipidsequence'),
  processTCPTS = require('./tcptssequence')
  _ = require('lodash')

const processHost = (host) =>{
  console.log(_.keys(host))
  var hostInfo = {}
  hostInfo.os = processOS(host.os[0])
  hostInfo.status = processStatus(host.status)
  hostInfo.address = processAddress(host.address)
  hostInfo.hostnames = processHostnames(host.hostnames)
  hostInfo.ports = processPorts(host.ports)
  hostInfo.uptime = processUptime(host.uptime)
  hostInfo.distance = processDistance(host.distance)
  hostInfo.tcpsequence = processTCPSequence(host.tcpsequence)
  hostInfo.ipidsequence = processIpId(host.ipidsequence)
  hostInfo.tcptssequence = processTCPTS(host.tcptssequence)
  return hostInfo
}

module.exports = processHost