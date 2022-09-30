const express = require('express')
const GetBlogs = require('../controller/getBlogs.js')
const PostBlog = require('../controller/PostBlog.js')
const postComment = require('../controller/PostComment.js')
const getComments = require('../controller/getComment.js')

const router = express.Router()

router.get('/blog/:id', GetBlogs)
router.get('/blog/post/:id/comment', getComments)
router.post('/blog/post', PostBlog)
router.post('/blog/post/:id/comment', postComment)


module.exports = router