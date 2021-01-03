/*
 * @authror : Leiyin.lin
 * @Date : 2021-01-03
 * @Timestamp : 2021-01-03 14:15
 * @Project : face
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : index
 * @Description : ...
 */

import buttonx from './src/button'

// 为组件提供 install 安装方法，供按需引入
buttonx.install = function (Vue) {
  Vue.component(buttonx.name, buttonx)
}

// 默认导出组件
export default buttonx
