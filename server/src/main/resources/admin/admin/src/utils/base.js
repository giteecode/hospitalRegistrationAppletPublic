const base = {
    get() {
        return {
            url : "http://localhost:8080/hospitalRegistrationApplet/",
            name: "hospitalRegistrationApplet",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/hospitalRegistrationApplet/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医院挂号系统小程序"
        } 
    }
}
export default base
