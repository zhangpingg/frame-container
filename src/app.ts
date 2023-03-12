interface listProps {
  name?: string;
  entry?: string;
  path?: string;
  microApp?: string;
}

/** 获取子应用配置 */
const getSubAppConfig = () => {
  return new Promise((resolve, reject) => {
    let list = [
      {
        name: 'app1',                     // 子应用名称（唯一）
        entry: 'http://localhost:8002',   // 子应用地址，即页面入口
        path: '/xc-frame/app1',           // 子应用激活路由（http://localhost:8003/xc-frame/app1/home）
      },
      {
        name: 'app2',
        entry: 'http://localhost:8002',
        path: '/xc-frame/app2',
      }
    ]
    resolve(list);
  })
}

export const qiankun = getSubAppConfig().then((res: any) => {
  const apps: listProps[] = [];
  const routes: listProps[] = [];
  res.forEach((item: listProps) => {
    apps.push({
      name: item.name,
      entry: item.entry
    })
    routes.push({
      path: item.path,
      microApp: item.name
    })
  })
  return {
    apps,
    routes
  };
});