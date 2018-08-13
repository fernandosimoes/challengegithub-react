import * as types from '../actionsTypes/actions';

const initialState = {
    repos: [],
    creator: '',
    commits: [],
    gitcredential: 'f7609f709952f69b63a2241f8d2dda0b424a40dc',
    errorbadcredentials: false
};
export default function github(state = initialState, action) {
    switch (action.type) {
        case types.REPOSITORY_LOADED:
            return {...state, repos: action.payload, creator: typeof action.payload[0] != "undefined" ?action.payload[0].owner.login : state.creator };
        case types.COMMITS_LOADED:
        console.log('state', action.payload)
            return {...state, commits: action.payload};
        case types.REPOSITORY_LOADED_BADCREDENTIALS:
            return { ...state, errorbadcredentials: true};
        case types.CREDENTIAL_UPDATE:
            return { ...state, gitcredential: action.payload, errorbadcredentials: false};
        default:
            return state;
    }
}

