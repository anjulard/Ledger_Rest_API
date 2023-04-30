
export const prepareResponse = (responseData) => {
    let response = {};
    response['status'] = "SUCESS";
    response['date']   = responseData;

    return response;
}