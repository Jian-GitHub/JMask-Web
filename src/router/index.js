import { createRouter, createWebHistory} from "vue-router";
// 1. 定义路由组件.
// 也可以从其他文件导入
const JMask = () => import('../views/JMask')
// const Login = () => import('../views/Login')
const Online = () => import('../views/Online')
const Home = () => import('../views/Home')
const Download = () => import('../views/Download')
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
                component: Online
            },
            {
                path: '/JMask/Home',
                component: Home
            },
            {
                path: '/JMask/Download',
                component: Download
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

export default router