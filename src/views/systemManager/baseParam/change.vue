<template>
    <el-dialog :title="mes.id?'编辑':'新增'" :visible="true" :before-close="cancel" :close-on-click-modal="false" width="700px">
        <el-form v-loading="loading" ref="ruleForm" size="small" :model="form" :rules="rules" label-width="80px" :validate-on-rule-change="false">
            <el-form-item label="选项编码" prop="dictCode">
                <el-input v-model="form.dictCode" placeholder="请输入" clearable />
            </el-form-item>
            <el-form-item label="选项类型" prop="dictName">
                <el-input v-model="form.dictName" placeholder="请输入" clearable />
            </el-form-item>
            <el-form-item label="选项内容" prop="dictItemName">
                <el-input v-model="form.dictItemName" placeholder="请输入" clearable />
            </el-form-item>
            <el-form-item label="选项赋值" prop="dictItemValue">
                <el-input v-model="form.dictItemValue" placeholder="请输入" clearable />
            </el-form-item>
            <el-form-item label="顺序号" prop="orderNo">
                <el-input v-model.number="form.orderNo" placeholder="请输入0或正整数" clearable />
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="form.description" type="textarea" placeholder="请输入" clearable />
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="cancel">取 消</el-button>
            <el-button type="primary" :loading="loading" size="small" @click="updateSingle">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
import DialogMixin from '@/mixin/dialog'
import validate from '@/utils/validate.js'
import { updateSingle } from '@/api/systemManager/baseParam'

export default {
    mixins: [DialogMixin],
    data() {
        return {
            form: {},
            rules: {
                dictCode: [validate.require()],
                dictName: [validate.require()],
                dictItemName: [validate.require()],
                dictItemValue: [validate.require()]
            },
            api: {
                updateSingle
            }
        }
    }
}
</script>
