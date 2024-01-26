import React, { FC, useCallback, useState } from 'react';

import ListIcon from '@mui/icons-material/List';

import TimeLineItemComponent from '../TimeLineItem';

import useOutsideClick from '../../../../hooks/useOutsideClick';

import userService from '../../../../services/User.service';

import { INote, NoteTypes } from '../../../../ducks/note.ducks';

import { NoteIconMap } from '../../constants/note.constants';
import { NoteTypePlaceholderMap } from './SubmitNote.constants';

import {
  Paper,
  TextInput,
  TypeButton,
  TypeSelect,
  ActionBar,
  Icon,
  SubmitButton,
  Form,
} from './SubmitNote.styles';
import Note from "../../../../models/Note.model.ts";

type SubmitNoteProps = {
  participantID: number,
  onSubmit(note: INote): void;
};

const SubmitNote: FC<SubmitNoteProps> = ({ participantID, onSubmit }) => {
  const [ activeNoteType, setActiveNoteType ] = useState<NoteTypes>(NoteTypes.Message);
  const [ message, setMessage ] = useState<string>('');
  const [ focused, setFocused ] = useState<boolean>(false);

  const ref = useOutsideClick(() => setFocused(false));

  const createNote = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const currentUser = userService.getCurrent();

    onSubmit(new Note(
        activeNoteType,
        message,
        currentUser.id,
        participantID
    ));

    setMessage('');
    setActiveNoteType(NoteTypes.Message);
  };

  const changeActiveNoteType = useCallback(
    (type: NoteTypes) => () => {
      setActiveNoteType(type);
    },
    [setActiveNoteType],
  );

  const changeMessage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
  }, [setMessage]);

  return (
    <TimeLineItemComponent icon={ListIcon} ref={ref}>
      <Paper variant='outlined'>
        <Form onSubmit={createNote}>
          <TextInput
            variant='outlined'
            placeholder={NoteTypePlaceholderMap[activeNoteType]('Milton Romaguera')}
            value={message}
            onChange={changeMessage}
            onFocus={() => setFocused(true)}
          />
          {focused && <ActionBar>
            <TypeSelect>
              {Object.values(NoteTypes).map((type) => (
                <TypeButton
                  type='button'
                  key={type}
                  isActive={activeNoteType === type}
                  onClick={changeActiveNoteType(type)}
                >
                  <Icon component={NoteIconMap[type]} />
                </TypeButton>
              ))}
            </TypeSelect>
            <SubmitButton onClick={createNote}>Submit</SubmitButton>
          </ActionBar>}
        </Form>
      </Paper>
    </TimeLineItemComponent>
  );
};

export default SubmitNote;
