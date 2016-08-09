var express = require('express');
var exphbs = require('express3-handlebars');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {

  fs.readdir("public/photos", function(err, items) {
    var photoData =[];
    var count = 0;
    for (var i=0; i<items.length; i++) {
      // ignore files starting with '.'
      if( /^\./.test(items[i])){ continue; }
      var photo = {
        "image": items[i]
      };
      photoData.push(photo);
      count++;
    }
    res.render('layouts/index', {
      heading: 'Family Album',
      count: count,
      photos: photoData
    });
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
