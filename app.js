const xml2js = require('xml2js'),
  inspect = require('util').inspect,
  processor = require('./process');

var parseNmap = (unparsedXml, cb)=>{
  if (unparsedXml) {
    var ipInfo = {}
    var parser = new xml2js.Parser()
    parser.parseString(unparsedXml, (err, result) => {
      if (err) cb(err)
      cb(null, result)
      //console.log(inspect(processor(result.nmaprun), false, 30))
      //console.log(inspect(result.nmaprun[base][0], false, 20))   
    })
  }
}

module.exports = parseNmap




