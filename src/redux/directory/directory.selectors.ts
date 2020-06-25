import { createSelector } from 'reselect';
import { DirectoryStateModel } from './directory.model';
const selectDirectory = (state: { directory: DirectoryStateModel; }) => state.directory;
export const selectDirectorySections = createSelector(
    [selectDirectory], directory => directory.sections
);