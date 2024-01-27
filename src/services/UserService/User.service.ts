import { users as userStorage, CURRENT_USER_ID } from '../__mock__/user.mocks';
import { IUser } from '../../ducks/user.ducks';

interface IUserService {
    getByID(id: string): IUser;
    getCurrent(): IUser;
}

class UserService implements IUserService {
    userStorage: IUser[];
    constructor() {
        this.userStorage = userStorage;
    }

    getByID(id: string): IUser {
        const [ user ] = this.userStorage.filter(user => user.id === id);
        return user;
    }

    getCurrent(): IUser {
        return this.getByID(CURRENT_USER_ID);
    }

    getAll(): IUser[] {
        return this.userStorage.map(user => ({ ...user }));
    }
}

export default new UserService();
