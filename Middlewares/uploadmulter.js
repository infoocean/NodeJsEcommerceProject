var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + ".jpg"); //Appending .jpg
  },
});

const uploads = multer({ storage: storage });
module.exports = uploads;



