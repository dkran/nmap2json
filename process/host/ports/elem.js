const processElem = (elem)=>{
  var newElem = []
  for(i = 0; i < elem.length; i++){
    if(typeof(elem[i]) === 'object'){
      newElem = {}
      if(elem[i].$.key && elem[i]._) newElem[elem[i].$.key] = elem[i]._
    }
    if(typeof(elem[i]) === 'string'){
      if(elem.length === 1) newElem = elem[i]
      if(elem.length > 1) newElem.push(elem[i])
    }
  }
  return newElem
}

module.exports = processElem