import { useCallback, useState } from 'react';
import Note from './components/Note';
import SubmitNote from './components/SubmitNote';

import { Note as NoteType } from '../../ducks/note.ducks';

import noteService from '../../services/Note.service';

import { Container } from './Feed.styles';

const Feed = () => {
  const [notes, setNotes] = useState<NoteType[]>(noteService.get());

  const addNote = useCallback((note: NoteType) => {
    const updatedNotes = [note, ...notes];
    setNotes(updatedNotes);
    noteService.set(updatedNotes);
  }, [notes, setNotes, noteService]);

  const deleteNote = useCallback((note: NoteType) => {
    const updatedNotes = notes.filter(current => current.id !== note.id);
    setNotes(updatedNotes);
    noteService.set(updatedNotes);
  }, [notes, setNotes, noteService]);

  return (
    <Container>
      <SubmitNote onSubmit={addNote} />
      {notes.map((note: NoteType) => (
        <Note key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </Container>
  );
};

export default Feed;
