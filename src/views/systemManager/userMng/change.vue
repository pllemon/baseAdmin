<template>
    <el-dialog :title="mes.id?'编辑':'新增'" :visible="true" :before-close="cancel" :close-on-click-modal="false" width="800px">
        <el-form v-loading="loading" ref="ruleForm" size="small" :model="form" :rules="rules" label-width="100px" :validate-on-rule-change="false">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别" prop="sex">
                        <el-input v-model.number="form.sex" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="手机号码" prop="mobilePhone">
                        <el-input v-model="form.mobilePhone" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="邮箱地址" prop="email">
                        <el-input v-model.number="form.email" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="状态" prop="status">
                        <el-radio-group v-model="form.status">
                            <el-radio v-for="(item, index) in dict.ENABLE_TYPE" :key="index" :label="item.value">{{ item.label }}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="有效期至" prop="accountFailTime">
                        <el-input v-model.number="form.accountFailTime" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="角色" prop="groupIds">
                        <el-input v-model.number="form.groupIds" placeholder="请输入" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="描述" prop="description">
                        <el-input v-model="form.description" type="textarea" placeholder="请输入" clearable />
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
import validate from '@/utils/validate.js'
import { updateSingle } from '@/api/systemManager/userMng'

export default {
    mixins: [DialogMixin],
    data() {
        return {
            form: {
                status: '1'
            },
            rules: {
                username: [validate.require()],
                name: [validate.require()],
                password: [validate.require()],
                status: [validate.require()],
                groupIds: [validate.require(2)]
            },
            api: {
                updateSingle
            }
        }
    }
}
</script>
