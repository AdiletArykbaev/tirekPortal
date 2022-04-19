import {GET_ALL_PROJECTS} from "../types";

const initialState = {
    projects: []
};

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS:
            state.status = action.payload;
            return state;
        default:
            return state
    }
};