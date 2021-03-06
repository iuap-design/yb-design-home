require('@babel/polyfill');
var path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

/**
 * UCF配置文件 更多说明文档请看 https://github.com/iuap-design/ucf-web/blob/master/packages/ucf-scripts/README.md
 */

module.exports = (env, argv) => {
    return {
        context: "",// 上下文对象y
        // 启动所有模块，默认这个配置，速度慢的时候使用另外的配置
        // bootList: true,
        // 启动这两个模块，启动调试、构建
        bootList: [
            "design",
            "design-new",
            "prepaper",
            "ecology"
        ],
        // 代理的配置
        proxy: [
        ],
        res_extra: true,
        // 构建资源的时候产出sourceMap，调试服务不会生效
        open_source_map: false,
        // CSS loader 控制选项
        css: {
            modules: false
        },
        // 全局环境变量
        global_env: {
            TINPERVERSION:JSON.stringify("V3.0.0")
        },
        // 别名配置
        alias: {
            //'ucf-apps': path.resolve(__dirname, 'ucf-apps/')
            'images': path.resolve(__dirname, 'ucf-apps/design/src/static/images'),
            'components': path.resolve(__dirname, 'ucf-common/src/components'),
            'static': path.resolve(__dirname, 'ucf-common/src/static'),
        },
        // 构建排除指定包
        externals: {
            //'tinper-bee': 'TinperBee'
        },
        // 加载器Loader
        loader: [],
        // 调试服务需要运行的插件
        devPlugins: [],
        // 构建服务需要运行的插件
        buildPlugins: [
            new CopyPlugin([
                { from: 'dist/*/*', to: 'design-new' }
              ]),
        ]
    }
}