import {createRouter, createWebHistory} from "vue-router";
import {checkToken} from "@/api/api";
import store from "@/store";

// 1. 定义路由组件.
// 也可以从其他文件导入
const JMask = () => import('../views/JMask')
const Online = () => import('../views/Online')
const Home = () => import('../views/Home')
const Download = () => import('../views/Download')
// const Login = () => import('../views/Login')
// const User = () => import('../views/User')
// const Registration = () => import('../views/Registration')
const User = () => import(/* webpackChunkName: "user" */ '../views/User')
const Login = () => import(/* webpackChunkName: "user" */ '../views/Login')
const Registration = () => import(/* webpackChunkName: "user" */ '../views/Registration')
// const NotFound = () => import('../views/NotFound')

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/',
        redirect: '/JMask'
    },
    {
        path: '/JMask',
        component: JMask,
        redirect: '/JMask/Home',
        children: [
            {
                path: '/JMask/Online',
                // name: 'Online',
                component: Online,
                meta:{
                    title: 'JMask 在线试用'
                }
            },
            {
                path: '/JMask/Home',
                component: Home,
                meta:{
                    title: 'JMask'
                }
            },
            {
                path: '/JMask/Download',
                component: Download,
                meta:{
                    title: 'JMask 下载应用'
                }
            },
            {
                path: '/JMask/Login',
                component: Login,
                meta:{
                    title: 'JMask 登录'
                }
            },
            {
                path: '/JMask/User',
                component: User,
                meta:{
                    title: 'JMask 个人中心'
                }
            },
            {
                path: '/JMask/Registration',
                component: Registration,
                meta:{
                    title: 'JMask 注册'
                }
            }
        ]
    },
    // {
    //     path: '/Online',
    //     // name: Online,
    //     component: Online
    // },
    // {
    //     path: '/:pathMatch(.*)*',
    //     component: NotFound
    // }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from, next) => {
    // if(to.path.startsWith('/loginURL')){
    //     window.localStorage.removeItem('access-admin')
    //     next()
    // }
    if (to.path.toLowerCase() === '/jmask/loginURL'){
        window.localStorage.removeItem('token');
        store.userName = '';
        document.title = 'JMask 登录';
        next();
    }else if (to.path.toLowerCase() === '/jmask/user') {
        let token = JSON.parse(window.localStorage.getItem('token'))
        if (!token) {
            window.localStorage.setItem('toPath', to.path)
            next({path: '/JMask/Login'})
            document.title = 'JMask 登录';
        } else {
            //检验token合法性
            checkToken().then((response) => {
                if (response.data.code == store.statusCode.ERROR) {
                    console.log("检验失败")
                    // next({path: '/error'})
                    next({path: '/JMask/Login'})
                    document.title = 'JMask 登录';
                }else{
                    // console.log('token有效')
                    next()
                    if (to.meta.title) {
                        document.title = to.meta.title
                    }
                }
            })
        }
    } else {
        if (to.meta.title) {
            document.title = to.meta.title
        }
        next()
    }
})

export default router