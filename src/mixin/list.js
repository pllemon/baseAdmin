// 用于列表页
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            loading: true,
            query: {
                page: 1,
                limit: 10,
                orderBy: 'crtTime_descending'
            },
            list: [],
            total: 0,
            defaultOrder: 'crtTime_descending',

            currentComponent: '',
            componentMes: {}
        }
    },
    created() {

    },
    methods: {
        // 获取列表
        getList() {
            this.loading = true
            this.api.getList(this.query).then(({ data }) => {
                this.list = data.rows
                this.total = data.total
            }).finally(() => {
                this.loading = false
            })
        },

        // 搜索
        search() {
            this.query.page = 1
            this.getList()
        },

        // 重置搜索
        reset () {
            if (this.$refs.table) {
                this.$refs.table.clearFilter()
                this.$refs.table.clearSort()
            }
            let specialArr = ['limit'] 
            for (let i in this.query) {
                if (i == 'page') {
                    this.query[i] = 1
                } else if (i == 'orderBy') {
                    this.query[i] = this.defaultOrder || 'crtTime_descending'
                } else if (specialArr.indexOf(i) == -1) {
                    this.query[i] = undefined
                }
            }
            this.getList()
        },

        // 单项删除
        removeSingle(id) {
            this.$confirm('确定删除该记录？', '提示', {
                type: 'warning'
            }).then(() => {
                this.api.removeSingle({
                    id: id
                }).then(() => {
                    this.$common.successNotify()
                    this.getList()
                })
            }).catch((err) => {
                console.log(err)
            })
        },

        // 单项克隆
        cloneSingle(data) {
            data.id = ''
            this.loadComponent('ChangeDialog', data)
        },

        // 加载组件
        loadComponent(name, data) {
            this.componentMes = data ? this.$common.deepCopy(data) : {}
            this.currentComponent = name
        },

        // 注销组件
        closeComponent(res) {
            this.currentComponent = ''
            this.componentMes = {}
            if (res) {
                if (res.notify) {
                    this.$common.successNotify()
                }
                if (res.reload) {
                    this.getList()
                }
            }
        }
    },
    computed: {
        ...mapGetters(['elements'])
    }
}
