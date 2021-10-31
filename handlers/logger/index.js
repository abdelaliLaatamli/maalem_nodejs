const winston = require('winston');

const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'warn'
        }),
        new winston.transports.File({
            level: 'error',
            // Create the log directory if it does not exist
            filename: 'logs/logger.log'
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;