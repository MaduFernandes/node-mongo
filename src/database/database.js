const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://dbUser:dbUser@cluster0-shard-00-00.n6vyw.mongodb.net:27017,cluster0-shard-00-01.n6vyw.mongodb.net:27017,cluster0-shard-00-02.n6vyw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-v9v8ee-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

module.exports = mongoose;
