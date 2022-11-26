#! /bin/bash

#Utility script to start http-server developing from a server.
#I use a nanode server on linode

#Startup node-js http-server on port 5050, disable caching. Serve index.html
http-server -p 5050 -c-1 -f ./index.html