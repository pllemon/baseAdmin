<template>
    <div class="dashboard-container">首页</div>
</template>

<script>
export default {
    created() {
        this.$common.getDictList(
            ['GUEST_TYPE', 'PLATFORM_PROTOCOL_TYPE'],
            function() {
                console.log(9999)
            }
        )
    }
}
</script>

<style lang="scss" scoped>
</style>
