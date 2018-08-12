import * as types from '../actionsTypes/actions';

const initialState = [{
    repos: []
}];
export default function github(state = initialState, action) {
    switch (action.type) {
        case types.REPOSITORY_LOADED:
            return {...state.repos, repos: action.payload};
            break;
        default:
            return state;
    }
}

