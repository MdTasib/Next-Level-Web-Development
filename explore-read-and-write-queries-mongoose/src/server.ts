import mongoose from "mongoose";
const express = require('express')
const app = express()
const port = 5000

// database connection
//database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb+srv://acc-inventory:acc-inventory@cluster0.aycinux.mongodb.net/acc-inventory");
    console.log(`🛢 Database connection successful`);

    // app.listen(port, () => {
    //   console.log(`Server is  listening on port ${port}`);
    // });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}
bootstrap();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})