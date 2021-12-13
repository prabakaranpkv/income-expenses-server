import expressAsyncHandler from "express-async-handler";
import Income from "../../model/Income.js";

//create Income
const createIncome = expressAsyncHandler(async (req, res) => {
  const { title, amount, description } = req.body;
  try {
    const income = await Income.create({
      title,
      amount,
      description,
      user: req?.user?._id,
    });
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//get all income
const fetchAllIncome = expressAsyncHandler(async (req, res) => {
  console.log(req?.user);
  const { page } = req.query;
  try {
    const income = await Income.paginate(
      {},
      { limit: 10, page: Number(page), populate: "user" }
    );
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//get one income
const fetchDetailIncome = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const income = await Income.findById(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//update
const updateIncome = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { title, amount, description } = req.body;
  try {
    const income = await Income.findByIdAndUpdate(
      id,
      {
        title,
        description,
        amount,
      },
      { new: true }
    );
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//delete
const deleteIncome = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const income = await Income.findByIdAndDelete(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

export {
  createIncome,
  fetchAllIncome,
  fetchDetailIncome,
  updateIncome,
  deleteIncome,
};
