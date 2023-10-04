const userRoute = require('./v1/user.route');
const authRoute = require('./v1/auth.route');
const helloRoute = require('./v1/hello.route');
const categoryRoute = require('./v1/category.route');
const postRoute = require('./v1/post.route');


const routeManager = (app) => {

    // API V1 Routes
    app.use('/v1/', helloRoute);
    app.use('/v1/auth', authRoute);
    app.use('/v1/user', userRoute);
    app.use('/v1/category', categoryRoute);
    app.use('/v1/post', postRoute);
}

module.exports = routeManager;