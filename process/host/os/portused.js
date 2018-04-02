const processPortUsed = (portused) => {
  var formatted = {}
  if(portused){
    formatted = []
    for(let i = 0; i < portused.length; i++){
      formatted.push(portused[i].$)
    }
  }
  return formatted
}

module.exports = processPortUsed