const mongoose = require('mongoose');

const url = 'mongodb+srv://alokkumar01104:Alok0404@cluster0.hnc3fy7.mongodb.net/DB26JULY?retryWrites=true&w=majority'


//asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
   console.log('connected to mongodb');

}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;