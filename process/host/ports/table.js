const processElem = require('./tableElem')
const inspect = require('util').inspect

const processTable = (table)=>{
  var newTable = {}
  if(table.length){
    if(table[0].$){
      console.log(table[0].$.key)
      newTable = {}
    }
    for(var i = 0; i< table.length; i++){
      if(table[i].elem){
        let newElem = processElem(table[i].elem)
        if(newTable) newTable = Object.assign(newElem)
      }
    }
  }
  console.log(inspect(newTable, false, null))
  return newTable
}

module.exports = processTable