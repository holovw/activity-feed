import localStorage from '../clients/LocalStorage.client';

interface IStorageService {
  set(key: string, data: unknown): void,
  get(key: string): unknown,
}

class StorageService implements IStorageService{

  set(key: string, data: unknown) {
    localStorage.setItem(key, data);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }
}

export default new StorageService();
