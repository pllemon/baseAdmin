<template>
    <div class="list-layout column">
        <div class="search">
            <slot name="search"></slot>
        </div>
        <div>
            <slot name="action"></slot>
        </div>
        <div class="main fx-1">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.list-layout{
    height: 100%;
}
</style>
