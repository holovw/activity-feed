import storage from '../StorageService';

import { INote } from '../../ducks/note.ducks';

export class NoteService {
  static ENTITY_KEY = 'notes';

  add(note: INote) {
    return this.set([note, ...this.getAll()]);
  }

  set(notes: INote[]): INote[] {
    storage.set<INote[]>(NoteService.ENTITY_KEY, notes);

    return notes;
  }

  getAll(): INote[] {
    return storage.get<INote[]>(NoteService.ENTITY_KEY) || [];
  }

  getByOwnerID(id: string): INote[] {
    return this.getAll().filter(note => note.ownerID === id) || [];
  }

  delete(note: INote): INote[] {
    return this.set(this.getAll().filter(current => current.id !== note.id));
  }
}

export const noteService = new NoteService();
