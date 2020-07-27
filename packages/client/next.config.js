const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'gaptest.cdn.content.amplience.net'
    },
    poweredByHeader: false,
    target: 'serverless'
}