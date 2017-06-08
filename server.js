"use strict";

const app = require('./app.js');
const Promise = require('bluebird');

return new Promise.resolve(app).then(() => {
    app.listen(3000, function() {
        console.log('Example app listen at port 3000');
    })
})

