<template>
    <div class="list-layout column">
        <div class="header">
            <div class="search">
                <slot name="search" />
            </div>
            <div>
                <slot name="action" />
            </div>
        </div>
        <div class="table">
            <slot />
        </div>
        <div class="pagination">
            <slot name="pagination" />
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
    .header{
        display: flex;
        margin-bottom: 10px;
        .search{
            flex: 1;
            margin-right: 20px;
        }
    }
    .table{
        flex: 1;
        overflow: auto;
    }
    .pagination{
        text-align: right;
        margin-top: 10px;
    }
}
</style>
