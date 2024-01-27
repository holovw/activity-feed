import storageService from './Storage.service';

const setItemMock = jest.fn();
const getItemMock = jest.fn();

const mockKey = 'testNotes';
const mockData = 'data';

jest.mock('../../clients/LocalStorage.client.ts', () => {
  return {
    default: {
      setItem: (key: string, data: unknown) => setItemMock(key, data),
      getItem: (key: string) => getItemMock(key),
    }
  };
});

describe('StorageService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set value', () => {
    storageService.set(mockKey, mockData);
    const [expectedKey, expectedData] = setItemMock.mock.calls[0];
    expect(expectedKey).toBe(mockKey);
    expect(expectedData).toBe(mockData);
  });

  it('should get value', () => {
    storageService.get(mockKey);
    const [expectedKey] = getItemMock.mock.calls[0];
    expect(expectedKey).toBe(mockKey);
  });
});
