

exports.handler = async (event) => {
    // TODO implement
console.log(event)


    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET"
     }, 
        body: JSON.stringify('You are logged in!', event),
    };
    return response;
};
