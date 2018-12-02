const app = require('./config/express')();

require('./config/router')(app);

app.listen(app.get('port'), () => {
    console.log('IEEE back end listening on port ' + app.settings.port);
});