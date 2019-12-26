<template>
<div>
    <Upload
        :action="action"
    />

    <Upload
        tips="请上传头像"
        :action="action"
        :type="2"
        :cover="cover"
    />

    <Upload
        :action="action"
        :type="3"
        :file-list="files"
        :auto-upload="false"
        @success="success"
    />
</div>
</template>

<script>
import Upload from '@/components/Upload/index'

export default {
    components: {
        Upload
    },
    data() {
        return {
            action: 'xxx',
            cover: 'http://183.63.190.42:8091/doorout/group1/M00/00/72/CmUI2V0_4ZOAUzfmAACL74M-COg627.jpg',
            files: [{
                name: '1',
                url: 'http://183.63.190.42:8091/doorout/group1/M00/00/72/CmUI2V0_4ZOAUzfmAACL74M-COg627.jpg'
            }]
        }
    },
    methods: {
        success() {
            console.log(1)
        }
    }
}
</script>
