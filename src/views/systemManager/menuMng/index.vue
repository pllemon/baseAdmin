<template>
    <div>
        <el-table :data="list" v-loading="listLoading" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}" stripe border fit highlight-current-row>
            <el-table-column type="index" label="序号" width="50"></el-table-column>
            <el-table-column min-width="120px" align="left" label="菜单名称">
                <template slot-scope="scope"><span>{{scope.row.name}}</span></template>
            </el-table-column>
            <el-table-column min-width="120px" align="left" label="菜单类型">
                <template slot-scope="scope"><span>{{scope.row.type}}</span></template>
            </el-table-column>
            <el-table-column min-width="120px" align="left" label="路径编码">
                <template slot-scope="scope"><span>{{scope.row.code}}</span></template>
            </el-table-column>
            <el-table-column min-width="120px" align="left" label="URL">
                <template slot-scope="scope"><span>{{scope.row.href}}</span></template>
            </el-table-column>
            <el-table-column min-width="120px" align="left" label="排序号">
                <template slot-scope="scope"><span>{{scope.row.orderNum}}</span></template>
            </el-table-column>
            <el-table-column fixed="right" width="200px" align="center" label="操作">
                <template slot-scope="scope">
                    111
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getMenuTree } from '@/api/systemManager/menuMng'
export default {
    data() {
        return {
            listLoading: false,
            list: []
        }
    },
    created() {
        this.getList()
        console.log(this.$store.getters.elements)
    },
    methods: {
        getList() {
            this.listLoading = true
            getMenuTree({
                title: ''
            }).then(({ data }) => {
                this.list = data
            }).finally(() => {
                this.listLoading = false
            })
        }
    }
}
</script>
