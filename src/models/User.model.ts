import { v4 as uuidv4 } from 'uuid';

import { IUser } from '../ducks/user.ducks';

class User implements IUser {
    public id: string;
    public fullName: string;

    constructor(fullName: string, id?: string) {
        this.id = id || uuidv4();
        this.fullName = fullName;
    }
}

export default User;
