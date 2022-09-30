const Blog = require('../models/blog')

 const postComment = async (req, res) => {
  
  const b = await Blog.findOne( {
    id: req.params.id.toString()
  }).catch(error => {
    return res.status(400).json({
      error,
      message: 'Cannot find blog!',
    })
  })
  
  b.comment.push(req.body.comment)
  await b.save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: 'Comment created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Comment not created!',
      })
    })
}

module.exports =  postComment