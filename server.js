var http = require('http')
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/route.js");
const port = 3000;

let app = express();
app.server = http.createServer(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

let files = function() {
  resource({
    /** POST / - Create a new entity */
    create({ body }, res) {
      console.log(body)
      // if (Object.keys(req.files).length == 0) {
      //   return res.status(400).send('No files were uploaded.');
      // }
    
      // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      // let sampleFile = req.files.sampleFile;
    
      // // Use the mv() method to place the file somewhere on your server
      // sampleFile.mv('images/test.jpg', function(err) {
      //   if (err)
      //     return res.status(500).send(err);
    
      //   const pythonProcess = spawn('python3',["cv_service/main.py", '/images/test.jpg']);
      //   pythonProcess.stdout.on('data', (data) => {
      //       // Do something with the data returned from python script
      //       res.send(data);
      //   });
      // });
    },
  })
};

var server = app.listen(port, function () {
  console.log("app running on port.", server.address().port);
});