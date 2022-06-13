exports.createStory = (req, res) => {
    res.status(200).json({
        message: "Story Created",
        id: req.body.id
    })
}
exports.editStory = (req, res) => {
    res.status(200).json({
        message: "Story Edited",
    })
}
exports.deleteStory = (req, res) => {
    res.status(200).json({
        message: "story Deleted",
        id: req.query.id
    })
}
exports.getStory = (req, res) => {
    res.status(200).json({
        id: req.params.id
    })
}
exports.getStories = (req, res) => {
    res.status(200).json({
        message: "here are all stories"
    })
}
exports.likeStory = (req, res) => {
    res.status(200).json({
        message: "You liked the story"
    })
}
exports.commentOnStory = (req, res) => {
    res.status(200).json({
        message: "You commented the story"
    })
}