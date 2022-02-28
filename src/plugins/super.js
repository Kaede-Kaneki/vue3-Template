export default {
    install(Vue){
        Vue.mixin({
            data(){
                return{
                    a:'1'
                }
            },
            methods:{
                // 超级事件处理
                superHandle (options, disabled, $event) {
                    // 这里以后可以做条件判断
                    const { to, fn, query, replace, params, url, label, disabled: itemDisabled, ...item } = options
                    if (disabled === undefined) {
                        disabled = itemDisabled
                    }
                    if (disabled === true) return
                    if (to) {
                        return this.$router[replace ? 'replace' : 'push']({ path: to, query, params })
                    }
                    if (fn) {
                        return typeof fn === 'function' ? fn.call(this, options, $event) : this[fn](options, $event)
                    }
                    if (url !== undefined) {
                        return this.$eqs.openPage({ title: label, url, ...item })
                    }
                },
            }
        })
    }
}
