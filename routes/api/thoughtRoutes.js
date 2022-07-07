const router = require("express").Router();

const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

//route for /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

//route for /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

//route for api/thoughts/:thoughtId/reactions
router.route("/:thoughtsId/reactions").post(addReaction);

// route for /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
