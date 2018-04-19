  _ = require('lodash')

const processHS = (hostscript)=>{
  var newHostScript = {}
  var obj = hostscript[0].script[0]
  var id = obj.$.id
  newHostScript[id] = { output: obj.$.output }
  _.forIn(obj, (el, key)=>{
    if(key === 'elem'){
      var elems = []
      for(var i = 0; i < el.length; i++){
      var curObj = {}
        if(el.length === 1) newHostScript[id][el[i].$.key] = el[i]._
        if(el.length > 1){
          newHostScript[id][el[i].$.key] = el[i]._
        }
      }
    }
  })
  return newHostScript
}

module.exports = processHS