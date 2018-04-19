const inspect = require('util').inspect

const processTimes = (times)=>{
  console.log(inspect(times, false, null))
}

module.exports = processTimes