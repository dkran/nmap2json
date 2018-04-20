## nmap2json

This is a highly functional, but not widely tested nmap xml parser. In my use cases, I get a very useful json object.  I did the best I could to mirror the xml, guys, but let me know early if any schema changes are suggested.

### Contributions

 - I could really use some help with this project, without messing up the schema, particularly `host.address` if it's an array,
 and `host.ports.script.table` and `host.ports.script.elem` elements. I find lodash's `_.forIn` to work well dealing with this stuff.
 - I could definitely use some unit testing :)   

This project has been under development to scrape ALL data from nmap to json via an `xml2js` output into a very usable format.  `xml2js` outputs quite ugly stuff to work with in javascript.  This script should eventually make 
I'm progressing on this very rapidly, and getting all the output we will need my grey hats. Right now, the following are parsed:

### Progress:
 - `runstats` - shows boring info on quantities of hosts scanned.  I only scan one host
 - `os` - processes the best possible os matches for devices running services on each open port
 - `host` - this parses partially.  I'm working on parsing the ports, scripts, tables, and elements right now.
 - `scan` - This shows what scan was run to get the particular result.

### Goals:
 - Finish processing the rest of the stats of different types of scans. `host.address` might be an array if there are IPv6 addresses, or a domain was specified and may reference multiple ip addresses on the backend (load balancer) or something...
 - Ultimate goal is to use this in a microservice for my https://github.com/dkran/hydra-webui and https://github.com/dkran/hydra-backend to process ~10 nmap scans at a time (seems to be the node limit). Meanwhile I figured us JS folk could use JSON output from nmap instead of XML.


#### Usage:
```
var processor = require('nmap2json')
processor(unparsedxml, (err, result)=>{
  console.log(result)
})
```