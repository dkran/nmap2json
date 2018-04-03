const xml2js = require('xml2js'),
  fs = require('fs'),
  inspect = require('util').inspect,
  _ = require('lodash'),
  xml = fs.readdirSync(__dirname + '/xml/'),
  processor = require('./process');



var unparsedXml = fs.readFileSync(__dirname + '/home').toString()
if (unparsedXml) {
  var ipInfo = {}
  var parser = new xml2js.Parser()
  parser.parseString(unparsedXml, (err, result) => {
    console.log(inspect(processor(result.nmaprun), false, 25))
    //console.log(inspect(result.nmaprun[base][0], false, 20))   
  })
}





