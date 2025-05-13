const express = require("express");
const { default: mongoose } = require("mongoose");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({ message: "hello,how are you" });
});
app.listen(PORT, () => {
  console.log("Server is Running......");
});

// connect mongodb
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("MongoDB connected succefully");
    
}).catch(err=>{
    console.log(err);
    
})
