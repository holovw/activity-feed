import { FC, memo } from 'react';

import TimeLineItemComponent from '../../components/TimeLineItem';
import NoteActions from './components/NoteActions';

import { Note as NoteType } from '../../../../ducks/note.ducks';
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
  note: NoteType,
  onDelete(note: NoteType): void,
};

const Note: FC<NoteProps> = ({ note, onDelete }) => {
  return (
    <TimeLineItemComponent icon={NoteIconMap[note.type]} actionDate={note.createdAt}>
      <Paper variant='outlined'>
        <Person>
          You<Activity component='span'>{NoteTypeActionMap[note.type]}</Activity>Joe
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
