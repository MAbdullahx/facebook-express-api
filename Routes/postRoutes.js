const Express = require("express")
const Router = Express.Router()
const postControllers = require("../Controllers/postControllers")

Router.route("/create").post(postControllers.createPost)
Router.route("/edit").put(postControllers.EditPost)
Router.route("/delete").delete(postControllers.DeletePost)
Router.route("/post/:id").get(postControllers.getPost)
Router.route("/posts").get(postControllers.getPosts)
Router.route("/like").put(postControllers.likePost)
Router.route("/comment").put(postControllers.commentOnPost)

module.exports = Router