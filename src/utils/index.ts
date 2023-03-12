import store from './store';

/** 设置皮肤，存储在缓存中，并给body追加肤色类名 */
export function setTheme(newKey: string, oldKey: string): void {
  const body = document.querySelector('body');
  const oldClassString = (body?.getAttribute('class') || '').split(/\s+/);

  const newClassString = `theme-${newKey}`;
  const index = oldClassString.findIndex((v) => v === `theme-${oldKey}`);
  if (index > -1) {
    oldClassString[index] = newClassString;
  } else {
    oldClassString.push(newClassString);
  }
  body?.setAttribute('class', oldClassString.join(' '));
  store.addItem('xc-theme', newKey);
}
