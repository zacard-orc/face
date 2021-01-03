/*
 * @authror : Leiyin.lin
 * @Date : 2021-01-03
 * @Timestamp : 2021-01-03 14:14
 * @Project : face
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : vue.config
 * @Description : ...
 */

const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add(path.resolve(__dirname,'packages'))
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          return options
        })
  }
}
