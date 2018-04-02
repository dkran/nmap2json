module.exports = (runstats) =>{
  var formatted = {}
  if(runstats){
    if(runstats[0]){
      if(runstats[0].finished) {
        formatted.finished = runstats[0].finished[0].$ 
      }
      if(runstats[0].hosts){
        formatted.hosts = runstats[0].hosts[0].$
      } 
    }
  }
  return formatted
}
