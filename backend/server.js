const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { dbConnect } = require('./src/utils/dbConnect');
const taskApi = require('./src/api/task.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8088;

app.route('/').get((req, res) => {
    res.send('Backend Running');
});

app.use('/task', taskApi());

app.listen(PORT, () => {
    dbConnect();
    console.log(`Server is up and running on PORT ${PORT}`);
});