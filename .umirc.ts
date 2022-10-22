import { defineConfig } from 'umi';
const path = require('path');
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '标题',
  publicPath: '/xc-frame/',
  favicon: '/xc-frame/favicon.png',
  base: '/',
  routes: routes,
  fastRefresh: {},                  // 快速刷新
  outputPath: 'dist',               // build 打包后的目录，默认是 dist
  alias: {                          // 别名配置
    "@": path.resolve("src"),
  },
  qiankun: {
    master: {},
  },
});
