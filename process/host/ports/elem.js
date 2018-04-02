const processElem = (elem)=>{
  var newElem = null
  for(i = 0; i < elem.length; i++){
    console.log(typeOf(elem[i]))
    if(typeOf(elem[i]) === 'Object'){
      newElem = {}
      newElem[elem[i].$.key] = elem[i]._
    }
    if(typeOf(elem[i]) === 'String'){
      newElem = {}
      newElem.extradata = elem[i]
    }
  }
  return newElem
}

module.exports = processElem