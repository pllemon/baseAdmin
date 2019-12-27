<template>
    <el-form ref="form" :model="form" :rules="rules" class="login-form" auto-complete="on">
        <h3 class="title">基础系统</h3>

        <el-form-item prop="username">
            <el-input
                ref="username"
                v-model="form.username"
                placeholder="账号"
                name="username"
                type="text"
                auto-complete="on"
            />
        </el-form-item>

        <el-form-item prop="password">
            <el-input
                ref="password"
                v-model="form.password"
                placeholder="密码"
                name="password"
                :type="passwordType"
                auto-complete="on"
                @keyup.enter.native="submit"
            />
            <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
        </el-form-item>

        <el-checkbox v-model="form.remember" class="remember">记住密码</el-checkbox>

        <el-button class="submit-btn" :loading="loading" type="primary" @click.native.prevent="submit">登录</el-button>
    </el-form>
</template>

<script>
import { getLoginStorage } from '@/utils/auth'
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                password: '',
                remember: false
            },
            rules: {},
            loading: false,
            passwordType: 'password',
            redirect: undefined
        }
    },
    watch: {
        $route: {
            handler: function(route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    created() {
        this.form = getLoginStorage()
    },
    methods: {
        showPwd() {
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
            this.$nextTick(() => {
                this.$refs.password.focus()
            })
        },

        submit() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true
                    this.$store.dispatch('user/login', this.form).then(() => {
                        this.$router.push({ path: this.redirect || '/' })
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.el-form{
    width: 400px;
    margin: 200px auto;
    .el-form-item{
        position: relative;
    }
    .title{
        text-align: center;
    }
    .show-pwd{
        position: absolute;
        right: 20px;
        top: 0;
    }
    .remember{
        margin-bottom: 20px;
    }
    .submit-btn{
        width: 100%;
    }
}
</style>
