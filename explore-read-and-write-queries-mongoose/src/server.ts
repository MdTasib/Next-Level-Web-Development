import mongoose from "mongoose";
import app from './app';

const port:number = 5000


//database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb+srv://acc-inventory:acc-inventory@cluster0.aycinux.mongodb.net/acc-inventory");
    console.log(`🛢 Database connection successful`);

    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}
bootstrap();