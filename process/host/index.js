const processOS = require('./os')
const processStatus = require('./status')
const processAddress = require('./address')
const processHostnames = require('./hostnames')
const processPorts = require('./ports')
const _ = require('lodash')

const processHost = (host) =>{
  console.log(_.keys(host))
  var hostInfo = {}
  hostInfo.os = processOS(host.os[0])
  hostInfo.status = processStatus(host.status)
  hostInfo.address = processAddress(host.address)
  hostInfo.hostnames = processHostnames(host.hostnames)
  hostInfo.ports = processPorts(host.ports)
  return hostInfo
}

module.exports = processHost