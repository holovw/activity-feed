import { NoteTypes } from '../../../../ducks/note.ducks';

const actions = {
  addAbout: (type: NoteTypes) =>
    (participant: string): string => `Add a ${type} about ${participant}...`,
  addWith: (type: NoteTypes) =>
    (participant: string): string => `Add a ${type} with ${participant}...`,
};

export const NoteTypePlaceholderMap = {
  [NoteTypes.Message]: actions.addAbout(NoteTypes.Message),
  [NoteTypes.Phone]: actions.addWith(NoteTypes.Phone),
  [NoteTypes.Coffee]: actions.addWith(NoteTypes.Coffee),
  [NoteTypes.Beer]: actions.addWith(NoteTypes.Beer),
  [NoteTypes.Meeting]: actions.addWith(NoteTypes.Meeting),
};
