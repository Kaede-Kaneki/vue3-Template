<template>
    <div class="home">
        <el-button type="primary">111</el-button>
    </div>
</template>

<script>
import {ElButton} from 'element-plus'
export default {
    name: 'Home',
    components: {ElButton},
    async created() {},
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/define";
.test{
    font-size: j(12);
}
</style>
