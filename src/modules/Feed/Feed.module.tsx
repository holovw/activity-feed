import {useCallback, useMemo, useState} from 'react';
import Note from './components/Note';
import SubmitNote from './components/SubmitNote';

import noteService from '../../services/Note.service';
import userService from "../../services/User.service.ts";

import { INote } from '../../ducks/note.ducks';

import { PARTICIPANT_USER_ID } from '../../services/__mock__/user.mock.ts';

import { Container } from './Feed.styles';

const Feed = () => {
  const currentUser = useMemo(() => userService.getCurrent(), [userService]);

  const [notes, setNotes] = useState<INote[]>(noteService.getByOwnerID(currentUser.id));

  const addNote = useCallback((note: INote) => {
    const updatedNotes = noteService.add(note);
    setNotes(updatedNotes);
  }, [setNotes, noteService]);

  const deleteNote = useCallback((note: INote) => {
    const updatedNotes = noteService.delete(note);
    setNotes(updatedNotes);
  }, [setNotes, noteService]);

  return (
    <Container>
      <SubmitNote participantID={PARTICIPANT_USER_ID} onSubmit={addNote} />
      {notes.map((note: INote) => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </Container>
  );
};

export default Feed;
