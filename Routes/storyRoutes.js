const Express = require("express")
const Router = Express.Router()
const storyController = require("../Controllers/storyController")

Router.route("/create").post(storyController.createStory)
Router.route("/edit").put(storyController.editStory)
Router.route("/delete").delete(storyController.deleteStory)
Router.route("/story/:id").get(storyController.getStory)
Router.route("/stories").get(storyController.getStories)
Router.route("/like").put(storyController.likeStory)
Router.route("/comment").put(storyController.commentOnStory)

module.exports = Router