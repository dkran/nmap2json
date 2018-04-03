const Elem = ('./elem')
const processTable = (table)=>{
  var newTable = {}
  if(table.length){
    for(var i = 0; i< table.length; i++){
      if(table[i] === '$') newTable[table[i].$.key] = Elem(table[i].elem)
    }
  } else{
    console.log(table[i])
  }
  return newTable
}

module.exports =  processTable