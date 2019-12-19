const getters = {
    elements: state => { // 按钮权限
        let elements = {}
        state.user.userInfo.elements.forEach(item => {
            elements[item.code] = true
        })
        return elements
    }
}
export default getters
