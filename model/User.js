import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    firstname: {
      required: [true, "First name is Required"],
      type: String,
    },
    lastname: {
      required: [true, "Last name is Required"],
      type: String,
    },
    email: {
      required: [true, "Email is Required"],
      type: String,
    },
    password: {
      required: [true, "Password is Required"],
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//virtual
userSchema.virtual("expenses", {
  ref: "Expense",
  foreignField: "user",
  localField: "_id",
});

userSchema.virtual("income", {
  ref: "Income",
  foreignField: "user",
  localField: "_id",
});

//hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//verify password
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
