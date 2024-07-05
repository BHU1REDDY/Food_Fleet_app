import mangoose from "mongoose";

export const connectDB = async () => {
  await mangoose
    .connect(
      "mongodb+srv://bhuvan:11042004@cluster0.nac48gx.mongodb.net/food_delivery_app"
    )
    .then(() => console.log("DB connected"));
};
