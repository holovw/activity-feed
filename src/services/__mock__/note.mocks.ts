import Note from '../../models/Note.model';

import { NoteTypes, INote } from '../../ducks/note.ducks';
import { CURRENT_USER_ID, PARTICIPANT_USER_ID } from './user.mocks';

export const mockNotes: INote[] = [
  new Note(NoteTypes.Meeting, 'Test message 1', CURRENT_USER_ID, PARTICIPANT_USER_ID),
  new Note(NoteTypes.Coffee, 'Test message 2', PARTICIPANT_USER_ID, CURRENT_USER_ID),
];
