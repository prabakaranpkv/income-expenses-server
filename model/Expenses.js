import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const expenseSchema = mongoose.Schema(
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
      default: "expense",
    },
    amount: {
      required: [true, "Amount is Required"],
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    createdAt: {
      type: Date,
      default: new Date(),
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

expenseSchema.plugin(mongoosePaginate);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
