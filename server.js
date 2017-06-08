"use strict";

const app     = require('./app.js');
const Promise = require('bluebird');
const logger  = require('./logger');


// Run Time
return new Promise.resolve(app).then(() => {
    app.listen(3003, function() {
        logger.info('Example app listen at port 3003');
    })
}).catch((err) => {
    logger.error('Example app start failed');
    return err;
})

