import { INote, NoteTypes } from '../ducks/note.ducks';

class Note implements INote {
    id: number;
    type: NoteTypes;
    message: string;
    createdAt: string;
    ownerID: number;
    participantID: number;

    constructor(
        type: NoteTypes,
        message: string,
        ownerID: number,
        participantID: number,
    ) {
        this.id = Date.now();
        this.type = type;
        this.message = message;
        this.createdAt = new Date().toISOString();
        this.ownerID = ownerID;
        this.participantID = participantID;
    }
}

export default Note;
