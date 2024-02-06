import { v4 as uuidv4 } from 'uuid';
import { INote, NoteTypes } from '../ducks/note.ducks';

interface INoteInput {
    type?: NoteTypes,
    message?: string,
    ownerID?: string,
    participantID?: string,
}

class Note implements INote {
    id: string;
    type: NoteTypes;
    message: string;
    createdAt: string;
    ownerID: string;
    participantID: string;

    constructor(
      {
          type = NoteTypes.Meeting,
          message = '',
          ownerID = '',
          participantID = '',
      }: INoteInput
    ) {
        this.id = uuidv4();
        this.type = type;
        this.message = message;
        this.createdAt = new Date().toISOString();
        this.ownerID = ownerID;
        this.participantID = participantID;
    }
}

export default Note;
