const request = require("request");
const { writeFile } = require("./writeFile");

function download(url, path) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("error", error);
    } else {
      writeFile(body, path);
    }
  });
}
module.exports = { download };
