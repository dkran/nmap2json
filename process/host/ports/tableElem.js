const processElem = (elem)=>{
  var objs = []
  var obj = {}
  for(i = 0; i < elem.length; i++){
    if(typeof(elem[i]) === 'object'){
      var name = ''
      if(elem[i].$.key && elem[i]._){
        obj[elem[i].$.key] = elem[i]._
      }
      obj[elem[i].$.key] = Object.assign(elem[i].$.key)    
      if(elem[i]) obj[elem[i].$.key] = elem[i]._
    }
    if(typeof(elem[i]) === 'string' && elem[i].length === 1) obj[elem[i]] = true
    if(typeof(elem[i]) === 'string'){
      if(elem[i-1]){
        if(elem[i-1].$){
          obj[elem[i-1].$.key] = Object.assign(elem[i].key)
        }
      }
      objs.push(elem[i])
    }
  }
  return objs
}

module.exports = processElem