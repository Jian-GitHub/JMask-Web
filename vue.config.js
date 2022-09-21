module.exports = {
    devServer: {
        // port: 80,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'https://www.jian-internet.com:8081', //目标地址--api路径
                // target: 'https://localhost:8081', //目标地址--api路径
                // target: process.env.VUE_APP_BASE_API, //目标地址--api路径
                ws: true, //// 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/api': ''
                } //这里重写路径--vue端口
            }
        }
        // proxy: 'http://www.jian-internet.com:8081'
    }
}