
import ENDPOINTS from "./EndPoints";
import ApiMethod from "./ApiMethod";
class ApiManager {

    static loginUser = (params) => {
        const url = ENDPOINTS.LOGIN_USER()
        return ApiMethod.post(url, params)
    }

}


export default ApiManager

