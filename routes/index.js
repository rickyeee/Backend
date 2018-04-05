const user  = require('./user')
const index = require('./home')
const test  = require('./api/test.js')

const registRouter = function(app){
    app.use('/', index)
    app.use('/user', user)
    app.use('/api/test', test)
}

module.exports = registRouter;
