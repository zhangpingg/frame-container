import { useEffect } from 'react';
import { setTheme } from '@/utils';
import styles from './index.modules.less';

const Layouts = (props: any) => {
  /** 设置皮肤，并给body追加肤色类名 */
  const setDefaultTheme = () => {
    const themeName = localStorage.getItem('zp-theme') || 'gold';
    setTheme(themeName, themeName);
  };

  useEffect(() => {
    setDefaultTheme();
  }, []);

  return (
    <div className={styles['layouts']}>
      <div className={styles['layouts-title']}>全局标题-基座</div>
      {props.children}
    </div>
  )
}

export default Layouts;
