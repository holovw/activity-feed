import { useCallback, useState } from 'react';
import Note from './components/Note';
import SubmitNote from './components/SubmitNote';

import { INote } from '../../ducks/note.ducks';

import noteService from '../../services/Note.service';

import { PARTICIPANT_USER_ID } from '../../services/__mock__/user.mock.ts';

import { Container } from './Feed.styles';

const Feed = () => {
  const [notes, setNotes] = useState<INote[]>(noteService.get() || []);

  const addNote = useCallback((note: INote) => {
    const updatedNotes = [note, ...notes];
    setNotes(updatedNotes);
    noteService.set(updatedNotes);
  }, [notes, setNotes, noteService]);

  const deleteNote = useCallback((note: INote) => {
    const updatedNotes = notes.filter(current => current.id !== note.id);
    setNotes(updatedNotes);
    noteService.set(updatedNotes);
  }, [notes, setNotes, noteService]);

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
