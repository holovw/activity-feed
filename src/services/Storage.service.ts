import localStorage from '../clients/LocalStorage.client';

interface IStorageService {
  set(key: string, data: unknown): void,
  get(key: string): unknown,
}

class StorageService implements IStorageService{

  set<Type>(key: string, data: Type) {
    localStorage.setItem(key, data);
  }

  get<Type>(key: string):Type | null {
    return localStorage.getItem(key);
  }
}

export default new StorageService();
