module.exports ={
    devServer:{
        proxy:{
            '^/api':{
                target:'http://localhost:5000/forum',
                changeOrigin:true,
                logLevel:'debug',
                pathRewrite:{'^/api':'/'}
            }
        }
    }
}