let errorHandler=(err,req,res,next)=>{ //next is neccessary for all middlewares
    console.log('Application error handler called')
    console.log(err)
    console.log('Some error occured at global level')
}
let notFoundHandler=(req,res,next)=>{
    console.log('Not found error handler called')
    res.status(404).send("Route not found in application")
}
module.exports={
    globalErrorHandler:errorHandler,
    routeNotFound:notFoundHandler
}