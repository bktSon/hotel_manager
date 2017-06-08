"use strict";

const winston  = require('winston');
const fs       = require('fs');
const env      = process.env.NODE_ENV || 'development';
const tsFormat = () => (new Date()).toLocaleTimeString();
const logDir   = 'log';

if ( ! fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            handleExceptions: true,
            json: true,
            exitOnError: false
        }),
        new (winston.transports.File)({
            filename: `${logDir}/development.log`,
            timestamp: tsFormat,
            level: env === 'development' ? 'debug' : 'info'
        })
    ]
});

module.exports = logger;