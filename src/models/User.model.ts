import { IUser } from '../ducks/user.ducks';

class User implements IUser {
    public id: number;
    public fullName: string;

    constructor(fullName: string, id?: number) {
        this.id = id || Date.now();
        this.fullName = fullName;
    }
}

export default User;
