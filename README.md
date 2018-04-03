## nmap2json

This project has been under development to scrape ALL data from nmap to json via an `xml2js` output into a very usable format.  `xml2js` outputs quite ugly stuff to work with in javascript.  This script should eventually make 
I'm progressing on this very rapidly, and getting all the output we will need my grey hats. Right now, the following are parsed:

### Progress:
 - `runstats` - shows boring info on quantities of hosts scanned.  I only scan one host
 - `os` - processes the best possible os matches for devices running services on each open port
 - `host` - this parses partially.  I'm working on parsing the ports, scripts, tables, and elements right now.
 - `scan` - This shows what scan was run to get the particular result.

### Goals:
 - Finish processing the rest of the stats of different types of scans.  `host.address` might be an array if there are IPv6 addresses.
 - Ultimate goal is to use this in a microservice for my https://github.com/nmap-webui to process ~10 nmap scans at a time (seems to be the node limit), and maybe multiple processes. Meanwhile I figured us JS folk could use JSON output from nmap instead of XML.

#### Usage:
```
var processor = require('nmap2json')
processor(unparsedxml, (err, result)=>{
  console.log(result)
})
```