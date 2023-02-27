const { download } = require("./download");

const url = process.argv[2];
const path = process.argv[3];

download(url, path);
