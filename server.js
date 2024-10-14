const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("web-lab"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'web-lab', 'index.html'));
});

const port = 3333;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
