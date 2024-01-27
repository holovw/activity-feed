import { noteService, NoteService } from './Note.service';
import Note from '../../models/Note.model';

import { mockNotes } from '../__mock__/note.mocks';
import { NoteTypes } from '../../ducks/note.ducks.ts';

const setMockFn = jest.fn();
const getMockFn = jest.fn().mockReturnValue(mockNotes);

jest.mock('../../services/StorageService', () => {
    return {
        default: {
            set: <Type>(key: string, data: Type):void => setMockFn(key, data),
            get: <Type>(key: string): Type[] => getMockFn(key),
        }
    };
});

describe('NoteService', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should set all notes to storage', () => {
        noteService.set(mockNotes);
        const [expectedKey, expectedData] = setMockFn.mock.calls[0];

        expect(expectedKey).toBe(NoteService.ENTITY_KEY);
        expect(expectedData).toBe(mockNotes);
    });

    it('should get all notes from storage', () => {
        const result = noteService.getAll();
        const [expectedKey] = getMockFn.mock.calls[0];

        expect(expectedKey).toBe(NoteService.ENTITY_KEY);
        expect(result).toBe(mockNotes);
    });

    it('should get add one note to storage', () => {
        const newNote = new Note(NoteTypes.Beer, 'Test message 3', '3', '4');
        noteService.add(newNote);
        const [expectedKey, expectedData] = setMockFn.mock.calls[0];

        expect(expectedData[0].id).toBe(newNote.id);
        expect(expectedKey).toBe(NoteService.ENTITY_KEY);
    });

    it('should get notes by owner id', () => {
        const ownerIDMock = mockNotes[0].ownerID;
        const result = noteService.getByOwnerID(ownerIDMock);

        expect(result.length).toBe(1);
        expect(result[0].ownerID).toBe(ownerIDMock);
    });

    it('should not get notes for missing owner id', () => {
        const ownerIDMock = '-1';
        const result = noteService.getByOwnerID(ownerIDMock);

        expect(result.length).toBe(0);
    });

    it('should delete note', () => {
        noteService.delete(mockNotes[0]);
        const [expectedKey, expectedData] = setMockFn.mock.calls[0];
        expect(expectedKey).toBe(NoteService.ENTITY_KEY);

        expect(expectedData.length).toBe(1);
        expect(expectedData[0].id).toBe(mockNotes[1].id);
    });
});
