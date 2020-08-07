const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'salmonnl.cdn.content.amplience.net'
    },
    poweredByHeader: false,
    target: 'serverless'
}