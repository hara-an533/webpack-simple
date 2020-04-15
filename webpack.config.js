const path=require('path'); //require是node的核心模块之一

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        //输出路径
        path:path.resolve(__dirname,'dist') 
        //__dirname：可以获取当前文件所属目录的绝对路径
        //"dist"是出口文件夹的名字
    },
}