const express = require('express');

// Import required modules
const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log('Hello, World!');