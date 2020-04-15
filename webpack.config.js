const path = require('path'); //require是node的核心模块之一

module.exports = {
    // entry: './src/index.js',
    entry: {
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output: {
        // filename: 'built.js',
        filename:"[name].bundle.js",
        //输出路径
        path: path.resolve(__dirname, 'dist')
        //__dirname：可以获取当前文件所属目录的绝对路径
        //"dist"是出口文件夹的名字
    },
    module: {
        rules: [
            //详细的loader配置
            {
                //匹配哪些文件
                test: /\.css$/,
                //使用哪些loader进行处理
                use: [
                    //use数组中loader执行顺序：从右到左，从下到上 依次执行
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块记载到js中，里面的内容是样式字符串
                    'css-loader'
                ]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }

        ]
    },
}