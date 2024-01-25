import User from '../../models/User.model';
import { IUser } from '../../ducks/user.ducks';

export const CURRENT_USER_ID: number = 1;
export const PARTICIPANT_USER_ID: number = 2;

export const users: IUser[] = [
    new User('Johnny Ive', CURRENT_USER_ID),
    new User('Milton Romaguera', PARTICIPANT_USER_ID),
];
