const express = require('express');
const app = express();
const router = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use(express.json());

router(app);

app.listen(5000);