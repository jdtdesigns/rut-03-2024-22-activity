// TODO: Import express and call the Router method
const router = require('express').Router()

// TODO: Import modules for tips/feedback
const tipsRouter = require('./tips')
const feedbackRouter = require('./feedback')

// localhost:3001/api
// TODO: Use our routes
router.use('/', tipsRouter)
router.use('/feedback', feedbackRouter)

// TODO: Export app
module.exports = router