var route_api = require('./apiRouter');

module.exports = function(app){

    app.use('/api', route_api);
    

}