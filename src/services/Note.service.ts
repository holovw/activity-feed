import storage from './Storage.service';

import { Note as NoteType } from '../ducks/note.ducks';

const key = 'notes';

class NoteService {
  set(notes: NoteType[]) {
    storage.set(key, notes);
  }

  get(): NoteType[] {
    return storage.get(key) || [];
  }
}

export default new NoteService();
