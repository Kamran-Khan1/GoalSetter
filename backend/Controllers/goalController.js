//@desc GET goals
//@route GET api/goals
//@access private
export const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//@desc SET goals
//@route POST api/goals
//@access private
export const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please give a text ");
  } else {
    res.status(201).json({ message: "Set goal" });
  }
};

//@desc UPDATE goals
//@route PUT api/goals/:id
//@access private
export const updateGoals = (req, res) => {
  res.status(200).json({ message: `Updated ${req.params.id} post` });
};

//@desc DELETE goals
//@route DELETE api/goals/:id
//@access private
export const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Deleted ${req.params.id} post` });
};
