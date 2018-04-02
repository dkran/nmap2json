const inspect = require('util').inspect,
  _ = require('lodash')

const processScript = (script) => {
  var scriptKeys = _.keys(script[0])
  var newscript = []
  for(var i = 0; i < script.length; i++){
    
  }
  console.log(inspect(script, false, 10))
  console.log(scriptKeys)
}

module.exports = processScript