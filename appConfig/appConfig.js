let appConfig={}
appConfig.port=3000
appConfig.allowedOrigins='*' //all origins
appConfig.env='devop'
appConfig.db={
    uri:'mongodb://127.0.0.1:27017/Blogdatabase'
} //connection string
appConfig.apiVersion='/api/1.0'
//exports module
module.exports={
    port:appConfig.port,
    cors:appConfig.allowedOrigins,
    env:appConfig.env,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion
} 