const inspect = require('util').inspect,
  _ = require('lodash'),
  processElem = require('./elem')

const processScript = (script) => {
  var newScript = {}
  _.forIn(script, (el, num)=>{
    _.forIn(el, (el, key)=>{
      if(key === '$' && el.id) newScript[el.id] = el.output
      //if(key === 'elem') newScript = Object.assign(processElem(el))
      //console.log(key)
    })
  })
  return newScript
}

module.exports = processScript