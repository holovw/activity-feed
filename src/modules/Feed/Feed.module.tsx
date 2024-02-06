import { useCallback, useMemo, useState } from 'react';

import Note from './components/Note';
import SubmitNote from './components/SubmitNote';

import noteService from '../../services/NoteService';
import userService from '../../services/UserService';

import NoteModel from '../../models/Note.model';

import { INote } from '../../ducks/note.ducks';

import { PARTICIPANT_USER_ID } from '../../services/__mock__/user.mocks';

import { Container } from './Feed.styles';

const Feed = () => {
  const currentUser = useMemo(() => userService.getCurrent(), [userService]);

  const [notes, setNotes] = useState<INote[]>(noteService.getByOwnerID(currentUser.id));

  const [editableIDs, setEditableIDs] = useState<Record<string, boolean>>({});

  const addNote = useCallback((note: INote) => {
    const updatedNotes = noteService.add(note);
    setNotes(updatedNotes);
  }, [setNotes, noteService]);

  const toggleEdit = useCallback((note: INote) => {
    setEditableIDs({
      ...editableIDs,
      [note.id]: !editableIDs[note.id],
    });
  }, [editableIDs, setEditableIDs]);

  const updateNote = useCallback((note: INote) => {
    const updatedNotes = noteService.update(note);
    setNotes(updatedNotes);

    toggleEdit(note);
  }, [setNotes, toggleEdit,  noteService]);

  const deleteNote = useCallback((note: INote) => {
    const updatedNotes = noteService.delete(note);
    setNotes(updatedNotes);
  }, [setNotes, noteService]);

  const newNote = useMemo(() => new NoteModel({
    ownerID: currentUser.id,
    participantID: PARTICIPANT_USER_ID,
  }), [Note])

  return (
    <Container>
      <SubmitNote note={newNote} onSubmit={addNote} />
      {notes.map((note: INote) => (
        editableIDs[note.id] ? <SubmitNote key={note.id} note={note} onSubmit={updateNote} />
          : <Note key={note.id} note={note} onEdit={toggleEdit} onDelete={deleteNote} />
      ))}
    </Container>
  );
};

export default Feed;
