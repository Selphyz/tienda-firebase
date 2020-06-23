import { DIRECTORY_DATA } from "./directory.data";

const INITIAL_STATE = DIRECTORY_DATA;
const directoryReducer = (state = INITIAL_STATE, action: { type: any; }) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default directoryReducer;