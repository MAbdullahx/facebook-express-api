exports.createPost = (req, res) => {
    res.status(200).json({
        message: "Post Created",
        id: req.body.id
    })
}
exports.EditPost = (req, res) => {
    res.status(200).json({
        message: "Post Edited",
    })
}
exports.DeletePost = (req, res) => {
    res.status(200).json({
        message: "Post Deleted",
        id: req.query.id
    })
}
exports.getPost = (req, res) => {
    res.status(200).json({
        id: req.params.id
    })
}
exports.getPosts = (req, res) => {
    res.status(200).json({
        message: "here are all posts"
    })
}
exports.likePost = (req, res) => {
    res.status(200).json({
        message: "You liked the post"
    })
}
exports.commentOnPost = (req, res) => {
    res.status(200).json({
        message: "You commented the post"
    })
}