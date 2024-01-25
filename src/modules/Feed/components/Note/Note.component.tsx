import { FC, memo, useMemo } from 'react';

import TimeLineItemComponent from '../../components/TimeLineItem';
import NoteActions from './components/NoteActions';

import { INote } from '../../../../ducks/note.ducks';

import userService from '../../../../services/User.service';

import { NoteIconMap } from '../../constants/note.constants';
import { NoteTypeActionMap } from './Note.constants';

import {
  Activity,
  Message,
  Paper,
  Person,
  Section,
} from './Note.styles';

type NoteProps = {
  note: INote,
  onDelete(note: INote): void,
};

const Note: FC<NoteProps> = ({ note, onDelete }) => {
  const owner = useMemo(() => userService.getByID(note.ownerID), [note.id, userService]);
  const participant = useMemo(() => userService.getByID(note.participantID), [note.participantID, userService]);
  const current = useMemo(() => userService.getCurrent(), [userService]);

  const ownerName = owner.id === current.id ? 'You' : owner.fullName;

  return (
    <TimeLineItemComponent icon={NoteIconMap[note.type]} actionDate={note.createdAt}>
      <Paper variant='outlined'>
        <Person>
          {ownerName}
          <Activity component='span' data-testid={`note-${note.id}`}>{NoteTypeActionMap[note.type]}</Activity>
          {participant.fullName}
        </Person>
        <Section>
          <Message>{note.message}</Message>
          <NoteActions note={note} onDelete={onDelete} />
        </Section>
      </Paper>
    </TimeLineItemComponent>
  );
};

export default memo(Note);
