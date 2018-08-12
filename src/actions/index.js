import * as types from '../actionsTypes/actions';

import { getUserRepo, getLastCommit} from '../resources/githubapi'

export function getRepo() {
    return function (dispatch, state) {
        getUserRepo().then((result) => {
            result.json().then(r => {
                dispatch({ type: types.REPOSITORY_LOADED, payload: r}) 
            })
        }).catch((err) => {

        });
    };

}


