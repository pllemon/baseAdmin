// 用于弹窗页
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {
    props: {
        mes: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            loading: false,
            form: this.mes,
            rules: {}
        }
    },
    created() {
        this.form = Object.assign({}, this.form, this.mes)
    },
    methods: {
        cancel() {
            this.$emit('close')
        },

        // 新增或编辑
        updateSingle() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.api.updateSingle(this.form).then(res => {
                        this.$emit('close', {
                            'notify': true,
                            'reload': true
                        })
                    }).finally(() => {
                        this.loading = false
                    })
                } else {
                    return false
                }
            })
        }
    },
    computed: {
        ...mapGetters(['elements']),
        ...mapState({
            dict: state => state.dict
        })
    }
}
