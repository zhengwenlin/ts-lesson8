import path from 'path'
import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import nodeResolve from '@rollup/plugin-node-resolve'
export default {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname,'dist/bundle.js'), // 出口文件
        format: 'iife', // 打包出来一个自执行函数
        name: 'MyBundle',
        sourcemap:true, // 根据源码产生映射文件
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        serve({
            contentBase: '',
            openPage:'/public/index.html',
            port:3000
        })
    ]
}