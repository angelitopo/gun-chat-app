// server.js
const express = require('express');
const Gun = require('gun');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Gun.js
const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
const gun = Gun({ web: server });
