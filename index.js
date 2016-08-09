var express = require('express');
var fs = require('fs');
var app = express();
var photosPath = "photos"
app.use(express.static('public'));


app.get('/', function (req, res) {

  fs.readdir("public/" + photosPath, function(err, items) {
    var html ="";
    for (var i=0; i<items.length; i++) {
        html += '<img src="http://localhost:3000/' + photosPath + '/' + items[i] + '" style="width: 200px;"/>';
    }
    res.send(html);
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
