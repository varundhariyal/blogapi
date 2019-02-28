//A standard response format function
let generate = (err, message, status, data) => {
    let response = { //response format object
        error: err,
        message: message,
        status: status,
        data: data
    }
    return response
} //end generate
module.exports = {
    generateResponse: generate
}