<template>
    <el-dialog :title="mes.id?'编辑':'新增'" :visible="true" :before-close="cancel" :close-on-click-modal="false" width="800px">
        <el-form v-loading="loading" ref="ruleForm" size="small" :model="form" :rules="rules" label-width="100px" :validate-on-rule-change="false">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="菜单类型" prop="type">
                        <el-select  v-model="form.type" filterable placeholder="请选择" clearable>
                            <el-option v-for="(item, index) in dict.MENU_TYPE" :key="index" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="菜单名称" prop="title">
                        <el-input v-model="form.title" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="所属菜单" prop="parentId">
                        <select-tree 
                            v-if="!loading"
                            v-model="form.parentId"
                            :options="treeData"
                        />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="路径编码" prop="code">
                        <el-input v-model="form.parentId" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="URL" prop="href">
                        <el-input v-model.number="form.href" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="功能类型" prop="deptCode">
                        <el-input v-model.number="form.deptCode" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="图标" prop="icon">
                        <el-input v-model.number="form.icon" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="标识码" prop="icode">
                        <el-select  v-model="form.icode" filterable placeholder="请选择" clearable>
                            <el-option v-for="(item, index) in dict.ICODE_TYPE" :key="index" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="属性" prop="attr">
                        <el-input v-model.number="form.attr" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="排序" prop="orderNum">
                        <el-input v-model.number="form.orderNum" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="状态" prop="enabled">
                        <el-radio-group v-model="form.enabled">
                            <el-radio v-for="(item, index) in dict.ENABLE_TYPE" :key="index" :label="item.label" name="type" />
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="描述" prop="description">
                        <el-input v-model.number="form.description" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="请求方式" prop="attr2">
                        <el-select  v-model="form.attr2" filterable placeholder="请选择" clearable>
                            <el-option v-for="(item, index) in dict.REQUEST_TYPE" :key="index" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="cancel">取 消</el-button>
            <el-button type="primary" :loading="loading" size="small" @click="updateSingle">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
import DialogMixin from '@/mixin/dialog'
import { getList, updateSingle } from '@/api/systemManager/menuMng'

export default {
    mixins: [DialogMixin],
    data() {
        return {
            treeData: [],
            rules: {
                dictCode: [this.$validate.require()],
                dictName: [this.$validate.require()],
                dictItemName: [this.$validate.require()],
                dictItemValue: [this.$validate.require()]
            },
            api: {
                updateSingle,
                getTreeList: getList
            }
        }
    },
    created() {
        this.loading = true
        this.api.getTreeList({}).then(({ data }) => {
            this.treeData = data
        }).finally(() => {
            this.loading = false
        })
    }
}
</script>
