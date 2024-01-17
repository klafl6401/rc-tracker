var express = require('express');
var app = express();
const axios = require('axios');

var fs = require("fs");

app.get('/module', function (req, res) {

axios.post('https://presence.roblox.com/v1/presence/users', {
	 "userIds": [
	   503704510
	 ]
})
  .then(response => {
	  console.table(response.data.userPresences)
      console.log(response.data.userPresences[0].userPresenceType)
    if(response.data.userPresences[0].userPresenceType == 1){
        res.end("true")
	}
	else if(response.data.userPresences[0].userPresenceType == 3){
    	res.end("studio")
	}
	else if(response.data.userPresences[0].userPresenceType == 2) {
		res.end("game")
	}
		
	else if(response.data.userPresences[0].userPresenceType == 4) {
		res.end("invisible")
    } else{
      res.end("false")
    }

  })
  .catch(error => {
    console.log(error);
  });
})


app.get('/', function (req, res) {
  res.write("<p>-<p>")
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})