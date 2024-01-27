import userService from './User.service';

import { CURRENT_USER_ID } from '../__mock__/user.mocks';

describe('UserService', () => {
  it('should get current user', () => {
    const expectedUser = userService.getCurrent();
    expect(expectedUser.id).toBe(CURRENT_USER_ID);
  });

  it('should get user by id', () => {
    const expectedUser = userService.getByID(CURRENT_USER_ID);
    expect(expectedUser.id).toBe(CURRENT_USER_ID);
  });
});
