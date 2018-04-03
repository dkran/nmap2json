const processElem = (elem)=>{
  var newElem = null
  for(i = 0; i < elem.length; i++){
    if(typeof(elem[i]) === 'object'){
      newElem = {}
      newElem[elem[i].$.key] = elem[i]._
    }
    if(typeof(elem[i]) === 'string'){
      newElem = elem[i]
    }
  }
  return newElem
}

module.exports = processElem