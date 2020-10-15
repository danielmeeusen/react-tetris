const express = require('express');
const path = require('path');

const app = express();

// designates server port and initiates dev server
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});