import { createSelector } from 'reselect';
import { UserStateModel } from './user.model';

const selectUser = (state: { user: UserStateModel; }) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)