const path = require('path');

module.exports = {
    distDir: 'build',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    env: {
        STRAPI_URL: process.env.STRAPI_URL,
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
        
        HOST_MAIL: process.env.HOST_MAIL,
        EMAIL_USER: process.env.EMAIL_USERL,
        PASSWORD_EMAIL: process.env.PASSWORD_EMAIL,
        PORT: process.env.PORT
    },
}
