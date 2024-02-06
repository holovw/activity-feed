import React, { FC, useCallback, useState, useMemo } from 'react';

import ListIcon from '@mui/icons-material/List';

import TimeLineItemComponent from '../TimeLineItem';

import useOutsideClick from '../../../../hooks/useOutsideClick';

import userService from '../../../../services/UserService';

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

type SubmitNoteProps = {
  note: INote,
  onSubmit(note: INote): void;
};

const SubmitNote: FC<SubmitNoteProps> = ({ note, onSubmit }) => {
  const [ activeNoteType, setActiveNoteType ] = useState<NoteTypes>(note.type);
  const [ message, setMessage ] = useState<string>(note.message);
  const [ focused, setFocused ] = useState<boolean>(false);

  const participantUser = useMemo(() => userService.getByID(note.participantID), [note.participantID, userService]);

  const ref = useOutsideClick(() => setFocused(false));

  const updateNote = useCallback((event: React.SyntheticEvent) => {
    event.preventDefault();

    onSubmit(
      {
        ...note,
        message,
        type: activeNoteType,
      }
    );

    setMessage('');
    setActiveNoteType(NoteTypes.Message);
  }, [
    note,
    activeNoteType,
    message,
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
    <TimeLineItemComponent key={note.id} icon={ListIcon} ref={ref}>
      <Paper variant='outlined'>
        <Form onSubmit={updateNote}>
          <TextInput
            variant='outlined'
            placeholder={NoteTypePlaceholderMap[activeNoteType](participantUser.fullName)}
            value={message}
            onChange={changeMessage}
            onFocus={focus}
          />
          {(focused || !!message) && <ActionBar>
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
            <SubmitButton onClick={updateNote}>Submit</SubmitButton>
          </ActionBar>}
        </Form>
      </Paper>
    </TimeLineItemComponent>
  );
};

export default SubmitNote;
