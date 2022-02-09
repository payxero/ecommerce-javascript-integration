var WebDevServer = require("web-dev-server");

var port = 8080;
// Create web server instance.
WebDevServer.Server.CreateNew()
  .SetDocumentRoot(__dirname)
  .SetPort(port)
  .AddPreHandler(async function (req, res, event) {
    if (req.GetPath() == "/health") {
      res.SetCode(200).SetBody("1").Send();
      event.PreventDefault();
    }
  })
  // optional, callback called after server has been started or after error ocured
  .Start(function (success, err) {
    if (!success) console.error(err);
    console.log(`Server is running on port: ${port}`);
  });
