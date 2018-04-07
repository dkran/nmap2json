const xml2js = require('xml2js'),
  inspect = require('util').inspect,
  processor = require('./process');

var parseNmap = (unparsedXml, cb) => {
  if (unparsedXml) {
    var ipInfo = {}
    var parser = new xml2js.Parser()
    parser.parseString(unparsedXml, (err, result) => {
      if (err) cb(err)
      result = processor(result)
      if (result) cb(null, result)
    })
  }
}

module.exports = parseNmap




