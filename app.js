const app = require('./config/express');

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.settings.port);
});