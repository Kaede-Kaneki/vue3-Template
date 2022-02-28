<template>
    <div id="app">
        <router-view class="view-wrap" v-slot="{Component}">
            <transition :name="transitionName">
                <keep-alive>
                    <component :is="Component"></component>
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script>
import TransitionMixin from 'src/mixins/transition.mixin'

export default {
    mixins: [TransitionMixin]
}
</script>

<style lang="scss">
@import "src/assets/scss/base";
html,
body{
    @extend %h100;
}
#app{
    @extend %w100;
    @extend %c3;
}
.view-wrap{
    @extend %pr;
    @extend %w100;
    @extend %h100;
    min-height: 100vh;
}
</style>
