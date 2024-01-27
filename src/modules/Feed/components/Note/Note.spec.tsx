import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import Note from './Note.component';

import userService from '../../../../services/UserService';

import NoteModel from '../../../../models/Note.model';

import { INote, NoteTypes } from '../../../../ducks/note.ducks';

describe('Note component', () => {
    test('should contain activity', async () => {
        const mockMessage = 'Test message';
        const onDeleteMock = jest.fn();

        const users = userService.getAll();

        const mockNote: INote = new NoteModel(
            NoteTypes.Meeting,
            mockMessage,
            users[0].id,
            users[1].id,
        );

        render(<Note note={mockNote} onDelete={onDeleteMock} />);

        const activityElement = await screen.findByTestId(`note-${mockNote.id}`);
        expect(activityElement).toHaveTextContent('had a meeting with')
    });
});
