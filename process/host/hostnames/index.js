const processHostnames = (hostnames) =>{
  var newhostnames = []
  var length = hostnames[0].hostname.length
  for(var i = 0; i < length; i++){
    newhostnames.push(hostnames[0].hostname[i].$)
  }
  return newhostnames
}

module.exports = processHostnames