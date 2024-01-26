import storage from './StorageService';

import { INote } from '../ducks/note.ducks';

const key = 'notes';

class NoteService {
  set(notes: INote[]) {
    storage.set<INote[]>(key, notes);
  }

  get(): INote[] | null {
    return storage.get<INote[]>(key);
  }
}

export default new NoteService();
