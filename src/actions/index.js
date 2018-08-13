import * as types from '../actionsTypes/actions';

import { getUserRepo, getLastCommits, getUserRepoStarredFirst, orderRepoOrdered} from '../resources/githubapi'

export function getRepo(user) {

    return function (dispatch, state) {
        console.log('state().github.credential', state().github);
        getUserRepo(user, state().github.gitcredential).then((result) => {
            result.json().then(r => {
                if (r.message == 'Bad credentials') {
                    dispatch({ type: types.REPOSITORY_LOADED_BADCREDENTIALS, payload: r }) 
                } else {
                    dispatch({ type: types.REPOSITORY_LOADED, payload: r}) 
                }
            })
        }).catch((err) => {

        });
    };

}

export function getRepoStarred(user) {
    return function (dispatch, state) {
        getUserRepoStarredFirst(user, state().github.gitcredential).then((result) => {
            result.json().then(r => {

                dispatch({ type: types.REPOSITORY_LOADED, payload: r}) 
            })
        }).catch((err) => {

        });
    };

}

export function getOrderedRepo(user, direction) {
    
    return function (dispatch, state) {
        orderRepoOrdered(user, direction, state().github.gitcredential).then((result) => {
            result.json().then(r => {
                dispatch({ type: types.REPOSITORY_LOADED, payload: r}) 
            })
        }).catch((err) => {

        });
    };

}


export function getCommits(reponame, user) {
    return function (dispatch, state) {
        getLastCommits(reponame, user, state().github.gitcredential).then((result) => {
            result.json().then(r => {
                console.log('r', r);
                dispatch({ type: types.COMMITS_LOADED, payload: r })
            })
        }).catch((err) => {

        });
    };
}


export function credentialUpdate(credential) {
    return function (dispatch) {
        dispatch({ type: types.CREDENTIAL_UPDATE, payload: credential })
        dispatch(getRepo('reactjs'))
    }
}