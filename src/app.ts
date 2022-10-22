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
        name: 'app1',                     // umi-frame
        entry: 'http://localhost:8001',
        path: '/xc-frame/app1',
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