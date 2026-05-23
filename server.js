const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve all static elements (HTML, CSS, JS) from this project folder
app.use(express.static(__dirname));

// Default Route to serve the storefront
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly at http://localhost:${PORT}`);
});