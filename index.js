const app = require('./app');
const port = process.env.PORT || 4000;
require('dotenv').config();
const connection = require('./config/db');
connection();
app.listen(port, () => {
    console.log(`SERVER  RUN ON PORT ${port}`);
});