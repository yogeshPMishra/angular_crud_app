const mongoose = require('mongoose');
const connection = () => {
    mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DB CONNECTION SUCCESSFULLY");
    }).catch((error) => {
        // console.log(error);
        console.log("FAILED TO CONNECTION FAILED");
    })
}
module.exports = connection;