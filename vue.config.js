module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '티사이언티픽';
                return args;
            });
    }
}