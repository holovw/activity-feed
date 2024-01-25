class LocalStorage {
  setItem(key: string, data: unknown): void {
    try {
      console.log("JSON.stringify(data): ", data);
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("LocalStorage client: ", error);
    }
  }

  getItem(key: string) {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.error("LocalStorage client: ", error);
    }

    return null;
  }
}

export default new LocalStorage();
