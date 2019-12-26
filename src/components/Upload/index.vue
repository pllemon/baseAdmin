<template>
    <el-upload
        ref="upload"
        class="upload"
        :action="action"
        :data="data"
        :headers="headers"
        :drag="options.drag"
        :accept="accept"
        :autoUpload="autoUpload"
        :show-file-list="options.showFileList"
        :list-type="options.listType"
        :file-list="fileList"
        :before-upload="beforeUpload"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :on-change="uploadChange"
    >
        <template v-if="type == 1">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </template>

        <template v-if="type == 2">
            <img v-if="cover" :src="cover" class="cover">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </template>

        <template v-if="type == 3">
            <i slot="default" class="el-icon-plus"></i>
        </template>

        <div v-if="tips" class="el-upload__tip" slot="tip">{{tips}}</div>
    </el-upload>
</template>

<script>
import { getToken } from '@/utils/auth'
let defaultOptions = {
    1: {
        drag: true,
        showFileList: true,
        listType: 'text'
    },
    2: {
        drag: false,
        showFileList: false,
        listType: 'picture-card'
    },
    3: {
        drag: false,
        showFileList: true,
        listType: 'picture-card'
    }
}
export default {
    name: 'Upload',
    props: {
        type: { // 上传类型，1-》拖拽文件上传，2-》头像上传, 3-》多图上传
            type: [String, Number],
            default: 1
        },
        action: { // 上传url
            type: String,
            default: '',
            required: true
        },
        data: { // 上传参数
            type: Object,
            default: () => {}
        },
        fileList: { // 文件列表
            type: Array,
            default: () => []
        },
        cover: { // 单图片封面
            type: String,
            default: ''
        },
        accept: { // 接受的文件类型
            type: String,
            default: ''
        },
        autoUpload: {
            type: Boolean,
            default: true
        },
        tips: { // 上传提示语
            type: String,
            default: ''
        }
    },
    data() {
        return {
            headers: { // 请求头参数
                'Authorization': getToken()
            },
            options: {}
        }
    },
    created() {
        this.options = defaultOptions[this.type]
    },
    methods: {
        // 上传前
        beforeUpload(file) {
            console.log(file)
        },

        // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
        uploadChange(file, fileList) {
            let success = fileList.every(item => {
               return item.status == 'success'
            })
            console.log(success)
            if (success) {
                this.$emit('success', fileList)
            }
        },

        // 上传成功
        uploadSuccess(response) {
            if (response.status == 200) {
                this.$message({
                    message: '上传成功',
                    type: 'success'
                })
                this.$emit('success', response.data)
            } else {
                this.$message({
                    message: response.message,
                    dangerouslyUseHTMLString: true,
                    type: 'error'
                })
                this.$refs.upload.clearFiles()
            }
        },

        // 上传失败
        uploadError(response, file, fileList) {
            let message = ''
            if (typeof response.message == 'string') {
                message = '上传失败'
            } else {
                message = JSON.parse(response.message).message
            }
            this.$message({
                dangerouslyUseHTMLString: true,
                message: message,
                type: 'error'
            })
            this.$refs.upload.clearFiles()
        },
    }
}
</script>

<style lang="scss">
.upload{
    margin-bottom: 50px;
    .cover{
        width: 100%;
        height: 100%;
    }
}
</style>
