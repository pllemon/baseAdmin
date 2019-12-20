<template>
    <list-layout>
        <template slot="search">
            <el-form ref="searchForm" :model="query" class="search-form" size="small" :inline="true">
                <el-form-item label="菜单名称" prop="title">
                    <el-input v-model="query.title" clearable @keyup.enter.native="search" @clear="search" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </template>

        <template slot="action">
            <el-button size="small" type="primary" @click="loadComponent('ChangeDialog')">添加</el-button>
        </template>

        <el-table 
            ref="table" 
            v-loading="loading" 
            :data="list" 
            row-key="id" 
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}" 
            border
            highlight-current-row
            height="100%"
        >
            <el-table-column type="index" label="序号" width="50" />
            <el-table-column label="菜单名称" prop="name" />
            <el-table-column label="菜单类型">
                <template slot-scope="scope"><span>{{scope.row.type}}</span></template>
            </el-table-column>
            <el-table-column label="路径编码" prop="code" />
            <el-table-column label="URL" prop="href" />
            <el-table-column label="排序号" prop="orderNum" />
            <el-table-column fixed="right" width="180px" align="center" label="操作">
                <template slot-scope="scope">
                    <el-button v-if="elements.menuMng_btn_update" type="text" @click="loadComponent('ChangeDialog', scope.row)">编辑</el-button>
                    <el-button v-if="elements.menuMng_btn_del" type="text" @click="removeSingle(scope.row.id)">删除</el-button>
                    <el-button v-if="elements.menuMng_btn_add" type="text" @click="cloneSingle(scope.row)">数据克隆</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 动态组件 -->
        <component :is="currentComponent" :mes="componentMes" @close="closeComponent" />
    </list-layout>
</template>

<script>
import ListMixin from '@/mixin/list'
import { getList, removeSingle } from '@/api/systemManager/menuMng'
import ChangeDialog from '@/views/systemManager/menuMng/change'

export default {
    components: {
        ChangeDialog
    },
    mixins: [ListMixin],
    data() {
        return {
            api: {
                getList,
                removeSingle
            }
        }
    },
    created() {
        this.query = {}
        this.getList()
    },
    methods: {
        getList() {
            this.loading = true
            this.api.getList(this.query).then(({ data }) => {
                this.list = data
            }).finally(() => {
                this.loading = false
            })
        }
    },
}
</script>
