export enum NoteTypes {
  Message = 'note',
  Phone = 'call',
  Coffee = 'coffee',
  Beer = 'beer',
  Meeting = 'meeting',
}

export type Note = {
  id: number;
  type: NoteTypes;
  message: string;
  createdAt: string;
};
