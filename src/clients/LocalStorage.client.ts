import errorService from '../services/Error.service';

class LocalStorage {
  setItem<Type>(key: string, data: Type): void {
    try {
      setTimeout(() => {
        localStorage.setItem(key, JSON.stringify(data));
      }, 0);
    } catch (e: unknown) {
      errorService.error(e);
    }
  }

  getItem<Type>(key: string): Type | null {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e: unknown) {
      errorService.error(e);
    }

    return null;
  }
}

export default new LocalStorage();
