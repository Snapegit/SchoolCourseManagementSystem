	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import xuesheng from '@/views/xuesheng/list'
	import kechengfenlei from '@/views/kechengfenlei/list'
	import jiaoshi from '@/views/jiaoshi/list'
	import storeup from '@/views/storeup/list'
	import discusskechengxinxi from '@/views/discusskechengxinxi/list'
	import kechengxinxi from '@/views/kechengxinxi/list'
	import kechengxuexi from '@/views/kechengxuexi/list'
	import config from '@/views/config/list'
	import jiaoshiCenter from '@/views/jiaoshi/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/jiaoshiCenter',
			name: '教师个人中心',
			component: jiaoshiCenter
		}
		,{
			path: '/news',
			name: '公告信息',
			component: news
		}
		,{
			path: '/xuesheng',
			name: '学生',
			component: xuesheng
		}
		,{
			path: '/kechengfenlei',
			name: '课程分类',
			component: kechengfenlei
		}
		,{
			path: '/jiaoshi',
			name: '教师',
			component: jiaoshi
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/discusskechengxinxi',
			name: '课程信息评论',
			component: discusskechengxinxi
		}
		,{
			path: '/kechengxinxi',
			name: '课程信息',
			component: kechengxinxi
		}
		,{
			path: '/kechengxuexi',
			name: '课程学习',
			component: kechengxuexi
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
