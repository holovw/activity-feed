export enum NoteTypes {
  Message = 'note',
  Phone = 'call',
  Coffee = 'coffee',
  Beer = 'beer',
  Meeting = 'meeting',
}

export interface INote {
  id: string;
  type: NoteTypes;
  message: string;
  createdAt: string;
  ownerID: string;
  participantID: string;
}
