const inspect = require('util').inspect,
  _ = require('lodash'),
  processElem = require('./tableElem')

const processScript = (script) => {
  var newScript = {},
    id = ''
  _.forIn(script, (el, num)=>{
    _.forIn(el, (el, key)=>{
      if(key === '$' && el.id) {
        id = el.id
        newScript[el.id] = el.output
      }
      /*if(key === 'elem'){
        newScript[id] = Object.assign(processElem(el))
      }*/
    })
  })
  return newScript
}

module.exports = processScript