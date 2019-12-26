<template>
    <list-layout>
        <template slot="search">
            <el-form ref="searchForm" :model="query" class="search-form" size="small" :inline="true">
                <el-form-item label="用户名" prop="username_LK_S">
                    <el-input v-model="query.username_LK_S" clearable @keyup.enter.native="search" @clear="search" />
                </el-form-item>
                <el-form-item label="姓名" prop="name_LK_S">
                    <el-input v-model="query.name_LK_S" clearable @keyup.enter.native="search" @clear="search" />
                </el-form-item>
                <el-form-item label="手机号" prop="mobilePhone_LK_S">
                    <el-input v-model="query.mobilePhone_LK_S" clearable @keyup.enter.native="search" @clear="search" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </template>

        <template slot="action">
            <el-button v-if="elements.userMng_btn_add" size="small" type="primary" @click="loadComponent('ChangeDialog')">添加</el-button>
        </template>

        <el-table
            ref="table"
            v-loading="loading"
            :data="list"
            border
            highlight-current-row
            height="100%"
            :default-sort="{prop: 'crtTime', order: 'descending'}"
            @sort-change="tableSort"
            @filter-change="tableFilter"
        >
            <el-table-column type="index" label="序号" width="50" />
            <el-table-column label="用户名" prop="username" />
            <el-table-column label="姓名" prop="name" />
            <el-table-column label="手机号码" prop="mobilePhone" />
            <el-table-column 
                label="状态"
                prop="status" 
                column-key="status_EQ_S"
                width="140"
                :filters="dict.ENABLE_TYPE"
                :filter-multiple="false"
                :filter-method="filterHandler"
            >
                <template slot-scope="scope">
                {{scope.row.status | getLabel('ENABLE_TYPE')}}
                </template>
            </el-table-column>
            <el-table-column label="创建时间" prop="crtTime" sortable />
            <el-table-column label="操作" fixed="right" width="180px" align="center">
                <template slot-scope="scope">
                    <el-button v-if="elements.userMng_btn_update" type="text" @click="loadComponent('ChangeDialog', scope.row)">编辑</el-button>
                    <el-button v-if="elements.userMng_btn_del" type="text" @click="removeSingle(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <template slot="pagination">
            <pagination
                :total="total"
                :page-size="query.limit"
                :current-page="query.page"
                @sizeChange="sizeChange"
                @currentChange="currentChange"
            />
        </template>

        <!-- 动态组件 -->
        <component :is="currentComponent" :mes="componentMes" @close="closeComponent" />
    </list-layout>
</template>

<script>
import ListMixin from '@/mixin/list'
import { getList, removeSingle } from '@/api/systemManager/userMng'
import ChangeDialog from '@/views/systemManager/userMng/change'

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
        this.getList()
    }
}
</script>
