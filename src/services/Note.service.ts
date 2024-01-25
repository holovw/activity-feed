import storage from './Storage.service';

import { INote } from '../ducks/note.ducks';

const key = 'notes';

class NoteService {
  set(notes: INote[]) {
    storage.set(key, notes);
  }

  get(): INote[] {
    return storage.get(key) || [];
  }
}

export default new NoteService();
