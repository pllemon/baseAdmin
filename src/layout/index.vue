<template>
    <div class="app-wrapper column">
        <Header />
        <div class="app-view fx-1">
            <transition name="fade-transform" mode="out-in">
                <keep-alive v-if="$route.meta.keepAlive">
                    <router-view />
                </keep-alive>
                <router-view v-else />
            </transition>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    name: 'Layout',
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
.app-wrapper{
    height: 100%;
    .app-view{
        padding: 20px;
        overflow: auto;
    }
}
</style>
