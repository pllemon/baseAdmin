<template>
    <el-pagination
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :layout="layout"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
</template>

<script>
export default {
    props: {
        currentPage: {
            type: [String, Number],
            default: 1
        },
        pageSize: {
            type: [String, Number],
            default: 10
        },
        pageSizes: {
            type: [Array],
            default: () => [10, 20, 50, 100, 200]
        },
        layout: {
            type: [String],
            default: 'total, sizes, prev, pager, next, jumper'
        },
        total: {
            type: [String, Number],
            default: 0
        }
    },
    data() {
        return {
        }
    },
    methods: {
        handleSizeChange(val) {
            this.$emit('sizeChange', val)
        },
        handleCurrentChange(val) {
            this.$emit('currentChange', val)
        }
    }
}
</script>

<style lang="scss">
</style>
