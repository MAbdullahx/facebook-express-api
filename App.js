const Express = require("express")
const app = Express()
const userRoutes = require("./routes/userRoutes")
const postRoutes = require("./routes/postRoutes")
const storyRoutes = require("./routes/storyRoutes")

app.use(Express.json())

app.use("/user", userRoutes)
app.use("/post", postRoutes)
app.use("/story", storyRoutes)

app.listen(8080, ()=>{
    console.log("Listening")
})