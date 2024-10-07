
import { API_URL } from "../const";

const getHeaders = () => {
    return {
        'Content-Type': 'application/json',

    }
}



class ApiMethod {
    static apiRequest(method, url, body = {}) {
        url = API_URL + url
        return new Promise((resolve, reject) => {
            fetch(url, { method, body: JSON.stringify(body), headers: getHeaders() })
                .then((res) => res.json())
                .then(resolve)
                .catch(reject)
        })
    }

    static get(url) {
        return this.apiRequest('GET', url)
    }
    static post(url, data) {
        return this.apiRequest('POST', url, data)
    }
    static put(url, data) {
        return this.apiRequest('PUT', url, data)
    }
    static delete(url) {
        return this.apiRequest('DELETE', url)
    }
}


export default ApiMethod