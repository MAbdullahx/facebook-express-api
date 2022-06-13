exports.createProfile = (req, res) => {
    res.status(200).json({
        message:"Profile created",
        username:req.body.username,
        password:req.body.password
    })
}
exports.editProfile = (req, res) => {
    res.status(200).json({
        message:"Profile edited"
    })
}
exports.deleteProfile = (req, res) => {
    res.status(200).json({
        message:"Profile deleted",
        id: req.query.id
    })
}
exports.getProfile = (req, res) => {
    res.status(200).json({
        message:`${req.params.userName}'s profile`
    })
}
exports.getProfiles = (req, res) => {
    res.status(200).json({
        message:"here are all the profile"
    })
}