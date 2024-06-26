import { FC, memo, useMemo } from 'react';

import TimeLineItemComponent from '../../components/TimeLineItem';
import NoteActions from './components/NoteActions';

import { INote } from '../../../../ducks/note.ducks';

import userService from '../../../../services/UserService';

import { NoteIconMap } from '../../constants/note.constants';
import { NoteTypeActionMap, OWNER_PRONOUN } from './Note.constants';

import {
  Activity,
  Message,
  Paper,
  Person,
  Section,
} from './Note.styles';

type NoteProps = {
  note: INote,
  onEdit(note: INote): void,
  onDelete(note: INote): void,
};

const Note: FC<NoteProps> = ({ note, onEdit, onDelete }) => {
  const owner = useMemo(() => userService.getByID(note.ownerID), [note.ownerID, userService]);
  const participant = useMemo(() => userService.getByID(note.participantID), [note.participantID, userService]);
  const current = useMemo(() => userService.getCurrent(), [userService]);

  const ownerName = owner.id === current.id ? OWNER_PRONOUN : owner.fullName;

  return (
    <TimeLineItemComponent key={note.id} icon={NoteIconMap[note.type]} actionDate={note.createdAt}>
      <Paper variant='outlined'>
        <Person>
          {ownerName}
          <Activity component='span' data-testid={`note-${note.id}`}>{NoteTypeActionMap[note.type]}</Activity>
          {participant.fullName}
        </Person>
        <Section>
          <Message>{note.message}</Message>
          <NoteActions note={note} onEdit={onEdit} onDelete={onDelete} />
        </Section>
      </Paper>
    </TimeLineItemComponent>
  );
};

export default memo(Note);
