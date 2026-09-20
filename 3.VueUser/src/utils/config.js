const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '新闻资讯管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'公告信息',
							url:'/index/newsList'
						},
					]
				},
				{
					name: '课程信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'课程信息',
							url:'/index/kechengxinxiList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "web学校课程管理系统"
        } 
    }
}
export default config
