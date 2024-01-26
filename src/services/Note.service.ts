import storage from './StorageService';

import { INote } from '../ducks/note.ducks';

const key = 'notes';

class NoteService {
  add(note: INote) {
    return this.set([note, ...this.getAll()]);
  }

  set(notes: INote[]): INote[] {
    storage.set<INote[]>(key, notes);

    return notes;
  }

  getAll(): INote[] {
    return storage.get<INote[]>(key) || [];
  }

  getByOwnerID(id: number): INote[] {
    return this.getAll().filter(note => note.ownerID === id) || [];
  }

  delete(note: INote): INote[] {
    return this.set(this.getAll().filter(current => current.id !== note.id));
  }
}

export default new NoteService();
