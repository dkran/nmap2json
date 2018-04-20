const inspect = require('util').inspect

const processOSMatch = (osmatch)=>{
  var newosmatch = [],
    length = osmatch.length
  for(var i = 0; i<length; i++){
    var os = {}
    var classLength = osmatch[i].osclass.length
    for(var j = 0; j < classLength; j++){
      os.product = osmatch[i].osclass[j].$
      if(os.cpe) os.cpe = osmatch[i].osclass[j].cpe[0]
    }
    newosmatch.push(os)
  }
  return newosmatch
}

module.exports = processOSMatch