import store from './utils/store';

interface listProps {
  name?: string;
  entry?: string;
  activePath?: string;
  path?: string;
  microApp?: string;
  props?: any;
}

/** 获取子应用配置 */
const getSubAppConfig = () => {
  return new Promise((resolve, reject) => {
    let list = [
      {
        name: 'xone-app1',                // 子应用名称（唯一）
        entry: 'http://localhost:8001',   // 子应用地址，即页面入口
        activePath: '/xone-app1',         // 子应用激活路由（http://localhost:8000/xc-frame/xone-app1/home）
      },
      {
        name: 'xone-app2',
        entry: 'http://localhost:800x',
        activePath: '/xone-app2',
      }
    ]
    resolve(list);
  })
}
/** 获取本地的config.json的静态配置文件 */
const getConfigJson = (): Promise<any> =>
  window
    .fetch('/xc-frame/config.json', {
      cache: 'no-store',
    })
    .then((response) => {
      return response.json();
    });

/** 设置apps、routes */
export const qiankun = getSubAppConfig().then(async (res: any) => {
  window.$webConfig = await getConfigJson(); 

  const apps: listProps[] = [];
  const routes: listProps[] = [];
  res.forEach((item: listProps) => {
    apps.push({
      name: item.name,
      entry: item.entry,
      props: { store }
    })
    routes.push({
      path: `/xc-frame${item.activePath}`,
      microApp: item.name
    })
  })
  return {
    apps,
    routes,
    // fetch: (url: string) => {
    //   return window.fetch(url, {
    //     headers: { accept: 'text/html' },
    //     cache: 'no-store',
    //   });
    // },
  };
});