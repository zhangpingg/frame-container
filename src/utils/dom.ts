/** 给dom元素追加类名 */
const addClassName = (dom: any, className: string): void => {
  dom?.classList.add(className)
}

export { addClassName };
