const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const dbConnect = require('./database/connection/mongo');
const router = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

dbConnect();

app.use(router);

app.all('/*', (req, res) => {
    return res.json({
        status: false,
        message: 'Recurso no encontrado',
    });
});

app.listen(port, () => console.log('Server running on:', 'http://localhost:' + port));