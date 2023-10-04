module.exports = {
    apps: [{
        script: "./node_modules/nodemon/bin/nodemon.js",
        args: ["app.js"],
        instances: 1,
        exec_mode: "fork",
        watch   : '.',
        ignore_watch: ['node_modules', 'logs', 'uploads'],
        env_dev : {
            name                                 : 'api-ktech-development',
            NODE_ENV                             : 'development',
            PORT                                 : 4444,
            JWT_SECRET                           : "Malatya44",
            JWT_ACCESS_EXPIRATION_MINUTES        : 1440,
            JWT_REFRESH_EXPIRATION_DAYS          : 30,
            JWT_RESET_PASSWORD_EXPIRATION_MINUTES: 60,
            JWT_VERIFY_EMAIL_EXPIRATION_MINUTES  : 44,
            SMTP_HOST                            : '',
            SMTP_PORT                            : 587,
            SMTP_USERNAME                        : '',
            SMTP_PASSWORD                        : '',
            EMAIL_FROM                           : '',
            UPLOAD_PATH                          : 'uploads/images',   
        },
        env_test: {
            name        : "api-ktech-test",
            PORT        : 4445,
            NODE_ENV    : "test",
            TOKEN_SECRET: "Malatya44"
        },
        env_prod: {
            name        : "api-ktech-prod",
            PORT        : 4446,
            NODE_ENV    : "production",
            TOKEN_SECRET: "Malatya44",
            UPLOAD_PATH : 'uploads/images', 
        },
    }],
};