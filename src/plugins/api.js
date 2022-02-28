import curl from 'src/utils/axios'

export const api = {
    reqArticle: (data)=>curl(``,data,"get")
}

export default {
    install(Vue){
        Vue.config.globalProperties.$api = api
    }
}
