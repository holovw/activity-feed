export enum NoteTypes {
  Message = 'note',
  Phone = 'call',
  Coffee = 'coffee',
  Beer = 'beer',
  Meeting = 'meeting',
}

export interface INote {
  id: number;
  type: NoteTypes;
  message: string;
  createdAt: string;
  ownerID: number;
  participantID: number;
}
