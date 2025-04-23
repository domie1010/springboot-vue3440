const base = {
    get() {
        return {
            url : "http://localhost:8080/kechengjiaoxuewangzhna/",
            name: "kechengjiaoxuewangzhna",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kechengjiaoxuewangzhna/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "课程教学网站"
        } 
    }
}
export default base
