const Blog = require('../models/blog')

const getComments = async (req, res) => {
    await Blog.find({id: req.params.id.toString()}, (err, blog) => {
        if (err) {
          return res.status(400).json({ success: false, error: err })
        }
        if (!blog.length) {
          return res
            .status(404)
            .json({ success: false, error: `Blog not found` })
        }
        return res.status(200).json({ success: true, data:blog[0].comment})
      }).catch(err => console.log(err))
}

module.exports = getComments