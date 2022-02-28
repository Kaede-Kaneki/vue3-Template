<template>
    <div class="home">
        <el-button type="primary" @click="handleClick">111</el-button>
    </div>
</template>

<script>
import {ElButton,} from 'element-plus'
export default {
    name: 'Home',
    components: {ElButton},
    async created() {},
    methods:{
        handleClick(){
            this.$message.error('111')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/define";
.test{
    font-size: j(12);
}
</style>
