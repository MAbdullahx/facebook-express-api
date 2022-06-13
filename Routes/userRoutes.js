const Express = require("express")

const Router = Express.Router()

const userController = require('../Controllers/userController')

Router.route("/create").post(userController.createProfile)
Router.route("/edit").put(userController.editProfile)
Router.route("/delete").delete(userController.deleteProfile)
Router.route("/profile/:userName").get(userController.getProfile)
Router.route("/profiles").get(userController.getProfiles)

module.exports = Router