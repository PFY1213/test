module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.imooc.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}