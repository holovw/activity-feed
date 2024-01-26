import { NoteTypes } from '../../../../ducks/note.ducks.ts';

const actions = {
  added: (type: NoteTypes): string => ` added a ${type} about `,
  had: (type: NoteTypes): string => ` had a ${type} with `,
};

export const NoteTypeActionMap = {
  [NoteTypes.Message]: actions.added(NoteTypes.Message),
  [NoteTypes.Phone]: actions.had(NoteTypes.Phone),
  [NoteTypes.Coffee]: actions.had(NoteTypes.Coffee),
  [NoteTypes.Beer]: actions.had(NoteTypes.Beer),
  [NoteTypes.Meeting]: actions.had(NoteTypes.Meeting),
};

export const OWNER_PRONOUN: string = 'You';
