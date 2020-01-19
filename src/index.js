const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const routes = require('./routes');
mongoose.connect(process.env.MONGOOSE_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);