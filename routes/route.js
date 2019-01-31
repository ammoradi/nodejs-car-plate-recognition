var appRouter = function (app) {
    app.post("/upload", function(req, res) {
        console.log(req.body)
        // var base64Data = req.rawBody.replace(/^data:image\/png;base64,/, "");
        var base64Data = req.body.base64.replace(/^data:image\/png;base64,/, "")

        require("fs").writeFile("out.jpg",
            base64Data, 'base64', function(err) {
                const spawn = require("child_process").spawn;
                const pythonProcess = spawn('python3',["cv_service/main.py", 'out.jpg']);
                pythonProcess.stdout.on('data', (data) => {
                    // Do something with the data returned from python script
                    res.status(200).send(data);
                    console.log(err);
                });
        });
    });
  }
  
  module.exports = appRouter;