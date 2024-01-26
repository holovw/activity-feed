import React, {FC, useCallback, useMemo, useState} from 'react';

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

  const currentUser = useMemo(() => userService.getCurrent(), [userService]);
  const participantUser = useMemo(() => userService.getByID(participantID), [participantID, userService]);

  const ref = useOutsideClick(() => setFocused(false));

  const createNote = useCallback((event: React.SyntheticEvent) => {
    event.preventDefault();
    const newNote = new Note(
        activeNoteType,
        message,
        currentUser.id,
        participantID
    );

    onSubmit(newNote);

    setMessage('');
    setActiveNoteType(NoteTypes.Message);
  }, [
    activeNoteType,
    message,
    currentUser,
    participantID,
    onSubmit,
    setMessage,
    setActiveNoteType
  ]);

  const changeActiveNoteType = useCallback(
    (type: NoteTypes) => () => {
      setActiveNoteType(type);
    },
    [setActiveNoteType],
  );

  const changeMessage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
  }, [setMessage]);

  const focus = useCallback(() => setFocused(true), [setFocused]);

  return (
    <TimeLineItemComponent icon={ListIcon} ref={ref}>
      <Paper variant='outlined'>
        <Form onSubmit={createNote}>
          <TextInput
            variant='outlined'
            placeholder={NoteTypePlaceholderMap[activeNoteType](participantUser.fullName)}
            value={message}
            onChange={changeMessage}
            onFocus={focus}
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
