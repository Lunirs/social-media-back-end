const { User, Thought } = require("../models");

const userController = {
  // GET all the users
  async getAllUsers(req, res) {
    try {
      const userData = await User.find().select("-__v");

      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // GET a single user by its id and populate thought and friend Data
  async getOneUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("friends")
        .populate("thoughts");

      if (!userData) {
        return res.status(404).json({ message: "This user does not exist." });
      }

      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // CREATE a new user
  async newUser(req, res) {
    try {
      const userData = await User.create(req.body);

      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // UDATE an existing user by its _id
  async updateUser(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!userData) {
        return res.status(404).json({ message: "This user does not exist." });
      }

      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // DELETE a user by its _id
  // CREATE a new friend to user's friend list
  // DELETE a friend from a user's friend list
};

module.exports = userController;
