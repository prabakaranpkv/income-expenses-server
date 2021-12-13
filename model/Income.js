import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const incomeSchema = mongoose.Schema(
  {
    title: {
      required: [true, "Title is Required"],
      type: String,
    },
    description: {
      required: [true, "Description is Required"],
      type: String,
    },
    type: {
      type: String,
      default: "income",
    },
    amount: {
      required: [true, "Amount is Required"],
      type: Number,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

//pagination
incomeSchema.plugin(mongoosePaginate);

const Income = mongoose.model("Income", incomeSchema);

export default Income;
