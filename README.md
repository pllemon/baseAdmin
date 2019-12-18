# 相关命令

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

# 开发说明
> 基础框架来源于 vue-element-admin，针对 vue-admin-template 模板进行拓展开发

# 拓展功能
* 系统登录及动态菜单
* 系统字典的获取和使用
* 常规组件的封装
* 通用js的封装（common.js、validate.js、filter.js等）
* 样式重置和flex布局
* iconfont图标的引入
* 多语言环境

# 逻辑说明
* 登录后去获取个人信息,从而获取个人菜单

# 开发说明
1. 自定义组件注释要详细且明确

# 拓展组件
1. 分页组件（2019/12/18）
2. 图片组件（2019/12/18）
3. 上传组件（2019/12/18）

# 外部库
1. Moment.js（js日期处理库）


# 使用示例
## 字典
1. 定义
在 sotre/modules/dict 的 state 里定义字典code
```js
const state = {
    GUEST_TYPE: undefined, //访客类型
    ID_TYPE: undefined, // 证件类型
}
```

2. 获取
```js
created() {
    this.$common.getDictList(['GUEST_TYPE', 'ID_TYPE'], function(){
        console.log('加载完成')
    })
}
```

3. 使用
```html
<el-checkbox-group v-model="form.type">
    <el-checkbox v-for="(item, index) in $store.state.dict.GUEST_TYPE" :key="index" :label="item.label" name="type" />
</el-checkbox-group>
```


# 更新时间线
* 系统登录（2019/12/18）