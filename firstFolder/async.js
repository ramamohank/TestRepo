var fs = require('fs');
var content = process.argv[2];

var a, b;

function count(callback) {
  fs.readFile(content, function (err, data) {
  	if(err){
  		console.log(err.toString);
  	}
  	else{
    a = data.toString(); 
    b = a.split('\n'); 
    callback();
  }});
}

function result() {
  console.log(b.length-1);
}

count(result); 