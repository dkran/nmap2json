

const processUptime = (uptime)=>{
  return ({seconds: uptime[0].$.seconds,
          lastboot: uptime[0].$.lastboot})
}

module.exports = processUptime