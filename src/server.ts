/** Serves the app */
import app from './app';
import * as config from './config/config';

config.setBodyParsers(app);
config.allowCORS(app);

app.listen( (config.PORT || 3000), () =>
    console.debug(`${config.APP_NAME} app listening on port ${config.PORT}...`),
);
