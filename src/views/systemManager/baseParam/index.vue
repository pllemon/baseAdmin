<template>
    <list-layout>
        <template slot="search">
            <el-form ref="searchForm" :model="query" class="search-form" size="small" :inline="true">
                <el-form-item label="选项编码" prop="dictCode_LK_S">
                    <el-input v-model="query.dictCode_LK_S" clearable @keyup.enter.native="search" @clear="search" />
                </el-form-item>
                <el-form-item label="选项类型" prop="dictName_LK_S">
                    <el-input v-model="query.dictName_LK_S" clearable @keyup.enter.native="search" @clear="search" />
                </el-form-item>
                <el-form-item label="选项内容" prop="dictItemName_LK_S">
                    <el-input v-model="query.dictItemName_LK_S" clearable @keyup.enter.native="search" @clear="search" />
                </el-form-item>
                <el-form-item label="选项赋值" prop="dictItemValue_LK_S">
                    <el-input v-model="query.dictItemValue_LK_S" clearable @keyup.enter.native="search" @clear="search" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </template>

        <template slot="action">
            <el-button v-if="elements.baseParam_btn_add" size="small" type="primary" @click="loadComponent('ChangeDialog')">添加</el-button>
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
        >
            <el-table-column type="index" label="序号" width="50" />
            <el-table-column label="选项编码" prop="dictCode" />
            <el-table-column label="选项类型" prop="dictName" />
            <el-table-column label="选项内容" prop="dictItemName" />
            <el-table-column label="选择赋值" prop="dictItemValue" />
            <el-table-column label="顺序号" prop="orderNo" />
            <el-table-column label="创建时间" prop="crtTime" sortable />
            <el-table-column label="操作" fixed="right" width="180px" align="center">
                <template slot-scope="scope">
                    <el-button v-if="elements.baseParam_btn_update" type="text" @click="loadComponent('ChangeDialog', scope.row)">编辑</el-button>
                    <el-button v-if="elements.baseParam_btn_del" type="text" @click="removeSingle(scope.row.id)">删除</el-button>
                    <el-button v-if="elements.baseParam_btn_add" type="text" @click="cloneSingle(scope.row)">数据克隆</el-button>
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
import { getList, removeSingle } from '@/api/systemManager/baseParam'
import ChangeDialog from '@/views/systemManager/baseParam/change'

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
