import errorService from '../services/Error.service';

class LocalStorage {
  setItem(key: string, data: unknown): void {
    try {
      setTimeout(() => {
        localStorage.setItem(key, JSON.stringify(data));
      }, 0);
    } catch (e: unknown) {
      errorService.error(e);
    }
  }

  getItem(key: string): unknown {
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
