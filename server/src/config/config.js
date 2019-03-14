module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'campsite',
        user: process.env.DB_USER || 'campsite',
        password: process.env.DB_PASS || 'campsite',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './camsite.sqlite'
        }

    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
