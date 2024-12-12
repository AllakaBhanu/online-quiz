const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve questions JSON
app.get('/questions', (req, res) => {
    res.json(require('./questions.json')); // Adjust the path if needed
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
