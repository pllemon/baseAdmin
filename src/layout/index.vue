<template>
  <div class="app-wrapper fx-column">
    <TheHeader />
    <div class="app-view fx-1">
      <transition name="fade-transform" mode="out-in">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view/>
        </keep-alive>
        <router-view v-else />
      </transition>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Header'
export default {
  name: 'Layout',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper{
  height: 100%;
  .app-view{
    padding: 20px;
  }
}
</style>
