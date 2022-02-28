import axios from "axios";
// import {ElMessage} from "element-plus";

const Axios = axios.create({
    timeout:60000,
    withCredentials:false,
})

Axios.interceptors.request.use(
    (config) => {
        const {url, method, params, data, headers} = config
        const tokenType = 'Bearer'
        headers['Authorization'] = tokenType
        console.log(`${url} [${method}] 请求参数=>`, method === 'get' ? params : data)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

Axios.interceptors.response.use(
    (res)=>{
        const {config:{url},data:respData} = res
        console.log(`${url} 请求返回=>`,respData)
        return respData
    },
    (error) => {
        console.log(`请求失败 =>`,error)
        return Promise.reject(error)
    }
)

export default Axios
