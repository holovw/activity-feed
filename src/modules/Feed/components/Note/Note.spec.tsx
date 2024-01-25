import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import Note from './Note.component';

import NoteModel from '../../../../models/Note.model';

import { INote, NoteTypes } from "../../../../ducks/note.ducks";

describe('Note component', () => {
    test('should contain activity', async () => {
        const mockID = Date.now();
        const mockMessage = 'Test message';
        const onDeleteMock = jest.fn();

        const mockNote: INote = new NoteModel(
            NoteTypes.Meeting,
            mockMessage,
            1,
            2,
        );

        render(<Note note={mockNote} onDelete={onDeleteMock} />);
        expect(await screen.findByTestId(`note-${mockID}`)).toHaveTextContent('had a meeting with')
    });
});


