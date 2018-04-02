const inspect = require('util').inspect,
  _ = require('lodash'),
  Elem = require('./elem')

const processScript = (script) => {
  var scriptKeys = _.keys(script[0])
  console.log(scriptKeys)
  var newscripts = []
  console.log(script)
  for(var i = 0; i < script.length; i++){
    var newscript = {}
    newscript[script[i].$.id] = script[i].$.output
    /*for(var j = 0; i < script[i].$.elem[i].length; j++){
      console.log(_.keys(script[i].$))
      if(script[i].$.elem[j]) newscript.elements = Elem(script[i].$.elem[j])
    }*/
    newscripts.push(newscript)
  }
  return newscripts
}

module.exports = processScript