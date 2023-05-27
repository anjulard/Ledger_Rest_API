
export const prepareResponse = (responseData) => {
    let response = {};
    response['status'] = "SUCESS";
    response['data']   = responseData;

    return response;
}