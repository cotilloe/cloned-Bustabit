module.exports = {
    PORT: process.env.PORT || 5432,
    USE_HTTPS: process.env.USE_HTTPS,
    HTTPS_KEY: process.env.HTTPS_KEY || './key.pem',
    HTTPS_CERT: process.env.HTTPS_CERT || './cert.pem',
    HTTPS_CA: process.env.HTTPS_CA,
    DATABASE_URL:  process.env.DATABASE_URL || "postgres://htgwputidzdvci:334a3a82abc705ff9dacd0302c839cfe6290c67047e0d4163191134b63fb5033@ec2-54-235-90-200.compute-1.amazonaws.com:5432/ddms66rq3hahjt
",
    ENC_KEY: process.env.ENC_KEY || 'devkey',
    PRODUCTION: process.env.NODE_ENV  === 'production',

    //Do not set any of this on production

    CRASH_AT: process.env.CRASH_AT //Force the crash point
};
