import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import storeupList from '@/views/pages/storeup/list'
import jiaoshiList from '@/views/pages/jiaoshi/list'
import jiaoshiDetail from '@/views/pages/jiaoshi/formModel'
import jiaoshiAdd from '@/views/pages/jiaoshi/formAdd'
import kechengfenleiList from '@/views/pages/kechengfenlei/list'
import kechengfenleiDetail from '@/views/pages/kechengfenlei/formModel'
import kechengfenleiAdd from '@/views/pages/kechengfenlei/formAdd'
import kechengxinxiList from '@/views/pages/kechengxinxi/list'
import kechengxinxiDetail from '@/views/pages/kechengxinxi/formModel'
import kechengxinxiAdd from '@/views/pages/kechengxinxi/formAdd'
import kechengxuexiList from '@/views/pages/kechengxuexi/list'
import kechengxuexiDetail from '@/views/pages/kechengxuexi/formModel'
import kechengxuexiAdd from '@/views/pages/kechengxuexi/formAdd'
import xueshengList from '@/views/pages/xuesheng/list'
import xueshengDetail from '@/views/pages/xuesheng/formModel'
import xueshengAdd from '@/views/pages/xuesheng/formAdd'
import xueshengRegister from '@/views/pages/xuesheng/register'
import xueshengCenter from '@/views/pages/xuesheng/center'
import newsList from '@/views/pages/news/list'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'storeupList',
			component: storeupList
		}
		, {
			path: 'jiaoshiList',
			component: jiaoshiList
		}, {
			path: 'jiaoshiDetail',
			component: jiaoshiDetail
		}, {
			path: 'jiaoshiAdd',
			component: jiaoshiAdd
		}
		, {
			path: 'kechengfenleiList',
			component: kechengfenleiList
		}, {
			path: 'kechengfenleiDetail',
			component: kechengfenleiDetail
		}, {
			path: 'kechengfenleiAdd',
			component: kechengfenleiAdd
		}
		, {
			path: 'kechengxinxiList',
			component: kechengxinxiList
		}, {
			path: 'kechengxinxiDetail',
			component: kechengxinxiDetail
		}, {
			path: 'kechengxinxiAdd',
			component: kechengxinxiAdd
		}
		, {
			path: 'kechengxuexiList',
			component: kechengxuexiList
		}, {
			path: 'kechengxuexiDetail',
			component: kechengxuexiDetail
		}, {
			path: 'kechengxuexiAdd',
			component: kechengxuexiAdd
		}
		, {
			path: 'xueshengList',
			component: xueshengList
		}, {
			path: 'xueshengDetail',
			component: xueshengDetail
		}, {
			path: 'xueshengAdd',
			component: xueshengAdd
		}
		, {
			path: 'xueshengCenter',
			component: xueshengCenter
		}
		, {
			path: 'newsList',
			component: newsList
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/xueshengRegister',
		component: xueshengRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
