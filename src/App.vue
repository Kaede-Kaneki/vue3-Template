<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="view-wrap" v-slot="{Component}">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </transition>
  </div>
</template>

<script>
import TransitionMixin from 'src/mixins/transition.mixin'
export default {
  mixins:[TransitionMixin]
}
</script>

<style lang="scss">
@import "src/assets/scss/base";

</style>
