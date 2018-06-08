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

Please note, some of the output are strings with `\n` return lines in them.  This is output from the database so it interpreted them.
Output: 
{
  "host": {
    "address": {
      "addr": "redacted",
      "addrtype": "ipv4"
    },
    "hostnames": [
      {
        "name": "redacted.unifiedlayer.com",
        "type": "PTR"
      }
    ],
    "os": {
      "osmatch": [
        {
          "product": {
            "accuracy": "87",
            "osfamily": "embedded",
            "type": "firewall",
            "vendor": "Fortinet"
          }
        }
      ],
      "portused": [
        {
          "portid": "21",
          "proto": "tcp",
          "state": "open"
        },
        {
          "portid": "113",
          "proto": "tcp",
          "state": "closed"
        }
      ]
    },
    "ports": [
      {
        "port": {
          "portid": "21",
          "protocol": "tcp"
        },
        "script": {
          "ssl-cert":  "Subject: commonName=*.bluehost.com
  Subject Alternative Name: DNS:*.bluehost.com, DNS:bluehost.com
  Not valid before: 2016-11-16T00: 00: 00
  Not valid after: 2020-02-15T23: 59: 59" ,
  "ssl-date": "2018-05-04T12:03:39+00:00; 0s from scanner time."
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "54",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "22",
          "protocol": "tcp"
        },
        "script": {
          "ssh-hostkey":  "
    1024 3e:b7: 91:fd: 12: 67: 1a:b8: 74: 67:e0: 5c:b4: 8d:f5:d2 (DSA)
    1024 c9: 3a: 51: 13:fa: 1f: 48:ad:a6:2e: 6c: 85:db:4e: 53:b0 (RSA)"
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "56",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "80",
          "protocol": "tcp"
        },
        "script": {
          "http-favicon": "BlueHost web hosting",
          "http-server-header": "nginx/1.12.2",
          "http-title": "Site doesn't have a title (text/html)."
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "56",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "110",
          "protocol": "tcp"
        },
        "script": {
          "pop3-capabilities": "TOP CAPA RESP-CODES UIDL STLS AUTH-RESP-CODE USER SASL(PLAIN LOGIN) PIPELINING",
          "ssl-cert":  "Subject: commonName=*.bluehost.com
  Subject Alternative Name: DNS:*.bluehost.com, DNS:bluehost.com
  Not valid before: 2016-11-16T00: 00: 00
  Not valid after: 2020-02-15T23: 59: 59" ,
  "ssl-date": "2018-05-04T12:04:33+00:00; 0s from scanner time."
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "52",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "111",
          "protocol": "tcp"
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "52",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "113",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "54",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "143",
          "protocol": "tcp"
        },
        "script": {
          "imap-capabilities": "capabilities IDLE Pre-login AUTH=PLAIN LITERAL+ OK IMAP4rev1 ENABLE listed STARTTLS LOGIN-REFERRALS AUTH=LOGINA0001 ID have post-login more SASL-IR",
          "ssl-cert":  "Subject: commonName=*.bluehost.com
  Subject Alternative Name: DNS:*.bluehost.com, DNS:bluehost.com
  Not valid before: 2016-11-16T00: 00: 00
  Not valid after: 2020-02-15T23: 59: 59" ,
  "ssl-date": "2018-05-04T12:04:34+00:00; 0s from scanner time."
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "52",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "199",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "52",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "443",
          "protocol": "tcp"
        },
        "script": {
          "http-server-header": "nginx/1.12.2",
          "http-title": "Site doesn't have a title (text/html).",
          "ssl-cert":  "Subject: commonName=*.bluehost.com
  Subject Alternative Name: DNS:*.bluehost.com, DNS:bluehost.com
  Not valid before: 2016-11-16T00: 00: 00
  Not valid after: 2020-02-15T23: 59: 59" ,
  "ssl-date": "2018-05-04T12:04:16+00:00; 0s from scanner time.",
          "tls-nextprotoneg":  "
    h2
    http/1.1"
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "54",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "554",
          "protocol": "tcp"
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "64",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "587",
          "protocol": "tcp"
        },
        "script": {
          "smtp-commands":  "box368.bluehost.com Hello 67-20-123-195.unifiedlayer.com [69.206.112.85], SIZE 52428800, 8BITMIME, PIPELINING, AUTH PLAIN LOGIN, STARTTLS, HELP, 
   Commands supported: AUTH STARTTLS HELO EHLO MAIL RCPT DATA BDAT NOOP QUIT RSET HELP " ,
  "ssl-cert":  "Subject: commonName=*.bluehost.com
  Subject Alternative Name: DNS:*.bluehost.com, DNS:bluehost.com
  Not valid before: 2016-11-16T00: 00: 00
  Not valid after: 2020-02-15T23: 59: 59" ,
  "ssl-date": "2018-05-04T12:04:35+00:00; 0s from scanner time."
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "56",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "888",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "52",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "993",
          "protocol": "tcp"
        },
        "script": {
          "imap-capabilities": "AUTH=LOGINA0001 have ENABLE IDLE post-login listed Pre-login AUTH=PLAIN LOGIN-REFERRALS capabilities LITERAL+ SASL-IR IMAP4rev1 OK more ID",
          "ssl-cert":  "Subject: commonName=*.bluehost.com
  Subject Alternative Name: DNS:*.bluehost.com, DNS:bluehost.com
  Not valid before: 2016-11-16T00: 00: 00
  Not valid after: 2020-02-15T23: 59: 59" ,
  "ssl-date": "2018-05-04T12:04:35+00:00; 0s from scanner time."
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "54",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "995",
          "protocol": "tcp"
        },
        "script": {
          "pop3-capabilities": "SASL(PLAIN LOGIN) UIDL PIPELINING CAPA AUTH-RESP-CODE USER TOP RESP-CODES",
          "ssl-cert":  "Subject: commonName=*.bluehost.com
  Subject Alternative Name: DNS:*.bluehost.com, DNS:bluehost.com
  Not valid before: 2016-11-16T00: 00: 00
  Not valid after: 2020-02-15T23: 59: 59"
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "54",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "1038",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "56",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "1051",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "56",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "1137",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "56",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "1218",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "54",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "1503",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "56",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "3995",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "56",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "6567",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "56",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "7070",
          "protocol": "tcp"
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "64",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "8080",
          "protocol": "tcp"
        },
        "script": {
          "http-favicon": "BlueHost web hosting",
          "http-server-header": "nginx/1.12.2",
          "http-title": "Site doesn't have a title (text/html)."
        },
        "state": {
          "reason": "syn-ack",
          "reason_ttl": "52",
          "state": "open"
        }
      },
      {
        "port": {
          "portid": "8888",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "52",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "9485",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "52",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "10002",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "56",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "10010",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "54",
          "state": "closed"
        }
      },
      {
        "port": {
          "portid": "44442",
          "protocol": "tcp"
        },
        "state": {
          "reason": "reset",
          "reason_ttl": "54",
          "state": "closed"
        }
      }
    ],
    "status": {
      "reason": "user-set",
      "reason_ttl": "0",
      "state": "up"
    },
    "times": {
      "rttvar": "38600",
      "srtt": "89276",
      "to": "400000"
    }
  },
  "id": "0aaa2253-9635-4505-ac1d-45a83ce0eb75",
  "runstats": {
    "finished": {
      "elapsed": "38691.74",
      "exit": "success",
      "summary": "Nmap done at Fri May  4 08:04:35 2018; 1 IP address (1 host up) scanned in 38691.74 seconds",
      "time": "1525435475",
      "timestr": "Fri May  4 08:04:35 2018"
    },
    "hosts": {
      "down": "0",
      "total": "1",
      "up": "1"
    }
  },
  "scan": {
    "args": "nmap -sS -A -O -R -Pn --top-ports 1000 -oX [redacted]/xml/67.20.123.195 -T polite 67.20.123.195",
    "scanner": "nmap",
    "start": "1525396785",
    "startstr": "Thu May  3 21:19:45 2018",
    "version": "7.70",
    "xmloutputversion": "1.04"
  }
}
```