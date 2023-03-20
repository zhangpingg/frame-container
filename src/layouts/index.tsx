import { useEffect } from 'react';
import { addClassName } from '@/utils/dom';
import store from '@/utils/store';
import styles from './index.module.less';

const Layouts = (props: any) => {
  /** 设置皮肤，并给body追加肤色类名 */
  const setTheme = () => {
    const { themeList } = window.$webConfig;
    const body = document.querySelector('body');
    const themeName = localStorage.getItem('xc-theme') || themeList?.[0]?.key || 'gold';
    addClassName(body, `theme-${themeName}`);
    store.addItem('xc-theme', themeName);
    document.body.setAttribute('data-name', 'xone-xqxj'); // 在基座body设置子应用的标识
  };

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <div className={styles['layouts']}>
      <div className={styles['layouts-title']}>全局标题-基座</div>
      {props.children}
    </div>
  )
}

export default Layouts;
