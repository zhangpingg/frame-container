class Store {
  /** 存储map */
  private storeMap: { [key: string]: any } = {};
  constructor() {
    const items = localStorage.getItem('frame-store');
    this.storeMap = items ? JSON.parse(items) : {};
  }
  /** 添加某一项 */
  addItem(key: string, value: any) {
    this.storeMap[key] = value;
    localStorage.setItem('frame-store', JSON.stringify(this.storeMap));
  }
  /** 获取某一项 */
  getItem(key: string) {
    const item = this.storeMap[key];
    return item;
  }
  /** 批量获取 */
  getItemByKeys(...keys: string[]) {
    const result: { [key: string]: any } = {};
    keys?.forEach((key) => {
      if (!result[key]) {
        result[key] = this.storeMap[key];
      }
    });
    return result;
  }
  getItemLocal(key: string) {
    const presetObj = JSON.parse(
      localStorage.getItem('frame-store') || '{}',
    );
    return presetObj[key];
  }
  /** 移除某一项 */
  removeItem(key: string) {
    delete this.storeMap[key];
    localStorage.setItem('frame-store', JSON.stringify(this.storeMap));
  }
  /** 清除所有存储的值 */
  clear() {
    // 某些数据也可以永久存储
    localStorage.setItem('frame-store', '');
  }
}

export default new Store();