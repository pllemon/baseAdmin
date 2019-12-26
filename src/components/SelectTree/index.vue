<!-- 树状选择器 -->
<template>
    <el-popover
        ref="popover"
        placement="bottom-start"
        trigger="click"
        @show="onShowPopover"
        @hide="onHidePopover"
    >
        <el-tree
            ref="tree"
            class="select-tree"
            highlight-current
            node-key="id"
            :style="`min-width: ${treeWidth}`"
            :data="options"
            :expand-on-click-node="false"
            :filter-node-method="filterNode"
            @node-click="onClickNode"
        />
        <el-input
            slot="reference"
            ref="input"
            v-model="inputName"
            clearable
            :style="`width: ${width}px`"
            :class="{ 'rotate': showStatus }"
            suffix-icon="el-icon-arrow-down"
            :placeholder="placeholder"
            @input="inputChange"
        />
    </el-popover>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        // 接收绑定参数
        value: String,
        // 输入框宽度
        width: String,
        // 选项数据
        options: {
            type: Array,
            required: true
        },
        // 输入框占位符
        placeholder: {
            type: String,
            required: false,
            default: '请选择'
        }
    },
    // 设置绑定参数
    model: {
        prop: 'value',
        event: 'selected'
    },
    data() {
        return {
            // 树状菜单显示状态
            showStatus: false,
            // 菜单宽度
            treeWidth: 'auto',
            // 输入框显示值
            inputName: '',
            // 实际请求传值
            inputValue: ''
        }
    },
    mounted() {
        // 检测输入框原有值并显示对应 label
        if (this.value) {
            this.queryTree(this.value)
        }
        // 获取输入框宽度同步至树状菜单宽度
        this.$nextTick(() => {
            this.treeWidth = `${(this.width || this.$refs.input.$refs.input.clientWidth) - 24}px`
        })
    },
    methods: {
        inputChange(val) {
            this.$refs.tree.filter(val)
        },

        // 选中单个
        onClickNode(node) {
            this.onCloseTree()
            this.inputName = node.label
            this.inputValue = node.id
        },

        // 隐藏树状菜单
        onCloseTree() {
            this.$refs.popover.showPopper = false
        },

        // 显示时触发
        onShowPopover() {
            this.showStatus = true
            this.$refs.tree.filter(false)
        },

        // 隐藏时触发
        onHidePopover() {
            this.showStatus = false
            this.$emit('selected', this.inputValue)
        },

        // 树节点过滤方法
        filterNode(query, data) {
            if (!query) return true
            return data.label.indexOf(query) !== -1
        },

        // 获取并选中树的某个节点
        queryTree(id) {
            const node = this.$refs.tree.getNode(id)
            if (node) {
                this.$refs.tree.setCurrentKey(id)
                this.inputName = node.data.name
            } else {
                this.inputName = ''
            }
            this.inputValue = id
        }
    }
}
</script>

<style lange="scss">
.select-tree {
    max-height: 250px;
    overflow: auto;
}
</style>
