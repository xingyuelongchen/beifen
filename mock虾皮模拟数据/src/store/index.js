
/**
 * 当前目录下的方法文件规则：
 *      必须是一个大写字母开头的js文件，
 *      必须由 export default 导出 
 * 
 */
import Vue from "vue";
import Vuex from "vuex";
import { Config } from '@/api';
Vue.use(Vuex);
const files = require.context('./', true, /[A-Z][\w\d]+\.js$/);
const MODULES = {};
files.keys().forEach(key => {
    const filename = key.replace(/(\.\/|\.js)/g, '');
    MODULES[filename] = { namespaced: Config.store.namespaced || false, ...files(key)['default'] };
});
export default new Vuex.Store({ modules: MODULES });