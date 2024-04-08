const express = require('express');
const app = express();

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

app.use(express.static('public_html'));
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});