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
  if(host.os) hostInfo.os = processOS(host.os)
  if(host.status) hostInfo.status = processStatus(host.status)
  if(host.address) hostInfo.address = processAddress(host.address)
  if(host.hostnames) hostInfo.hostnames = processHostnames(host.hostnames)
  if(host.ports) hostInfo.ports = processPorts(host.ports).ports
  if(host.uptime)hostInfo.uptime = processUptime(host.uptime)
  if(host.distance) hostInfo.distance = processDistance(host.distance)
  if(host.tcpsequence) hostInfo.tcpsequence = processTCPSequence(host.tcpsequence)
  if(host.ipidsequence) hostInfo.ipidsequence = processIpId(host.ipidsequence)
  if(host.tcptssequence) hostInfo.tcptssequence = processTCPTS(host.tcptssequence)
  if(host.hostscript) hostInfo.hostscript = processHS(host.hostscript)
  if(host.times) hostInfo.times = processTimes(host.times)
  if(host.trace) hostInfo.trace = processTrace(host.trace)
  return hostInfo
}

module.exports = processHost