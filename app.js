const xml2js = require('xml2js'),
  inspect = require('util').inspect,
  processor = require('./process');

const parseNmap = (unparsedXml, cb) => {
  if (unparsedXml) {
    var ipInfo = {}
    var parser = new xml2js.Parser()
    parser.parseString(unparsedXml, (err, result) => {
      if (err) cb(err)
      if(result){
        newResult = processor(result.nmaprun)
        if(newResult) cb(null, newResult)
      }
    })
  }
}

module.exports = parseNmap




