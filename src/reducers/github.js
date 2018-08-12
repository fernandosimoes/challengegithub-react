import * as types from '../actionsTypes/actions';

const initialState = [{
    repos: [],
    creator: '',
    commits: []
}];
export default function github(state = initialState, action) {
    console.log('action.payload', action.payload);
    console.log('action.creator', state.creator);

    switch (action.type) {
        case types.REPOSITORY_LOADED:
        return {...state, repos: action.payload, creator: typeof action.payload[0] != "undefined" ?action.payload[0].owner.login : state.creator };
        case types.COMMITS_LOADED:
        console.log('state', action.payload)
            return {...state, commits: action.payload};
        default:
            return state;
    }
}

