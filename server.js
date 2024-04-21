// server.js
const express = require('express');
const tokenRoutes = require('./app/routes/tokenRoutes');
const errorHandler = require('./app/utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/token', tokenRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
