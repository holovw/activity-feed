import { users as userStorage, CURRENT_USER_ID } from './__mock__/user.mock';
import { IUser } from "../ducks/user.ducks.ts";

interface IUserService {
    getByID(id: number): IUser;
    getCurrent(): IUser;
}

class UserService implements IUserService {
    userStorage: IUser[];
    constructor() {
        this.userStorage = userStorage;
    }

    getByID(id: number): IUser {
        const [ user ] = this.userStorage.filter(user => user.id === id);
        return user;
    }

    getCurrent(): IUser {
        return this.getByID(CURRENT_USER_ID);
    }
}

export default new UserService();
