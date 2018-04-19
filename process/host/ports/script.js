const inspect = require('util').inspect,
  _ = require('lodash')

const processScript = (script) => {
  var newScript = {}
  _.forIn(script, (el, key)=>{
    _.forIn(el, (el, key)=>{
      if(key === '$' && el.id) newScript[el.id] = el.output
    })
  })
  return newScript
}

module.exports = processScript