import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB is Connected Successfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default dbConnect;
