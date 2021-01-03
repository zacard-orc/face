/*
 * @authror : Leiyin.lin
 * @Date : 2021-01-03
 * @Timestamp : 2021-01-03 14:17
 * @Project : face
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : index
 * @Description : ...
 */

import buttonx from './button';

const components = [
  buttonx,
];

const install = function (Vue) {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  buttonx,
};
