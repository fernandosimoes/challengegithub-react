import * as types from '../actionsTypes/actions';

import { getUserRepo, getLastCommits, getUserRepoStarredFirst, orderRepoOrdered} from '../resources/githubapi'

export function getRepo(user) {
    console.log('user', user);
    return function (dispatch, state) {
        getUserRepo(user).then((result) => {
            result.json().then(r => {
                dispatch({ type: types.REPOSITORY_LOADED, payload: r}) 
            })
        }).catch((err) => {

        });
    };

}

export function getRepoStarred(user) {
    console.log('user', user);
    return function (dispatch, state) {
        getUserRepoStarredFirst(user).then((result) => {
            result.json().then(r => {
                dispatch({ type: types.REPOSITORY_LOADED, payload: r}) 
            })
        }).catch((err) => {

        });
    };

}

export function getOrderedRepo(user, direction) {
    
    return function (dispatch, state) {
        orderRepoOrdered(user, direction).then((result) => {
            result.json().then(r => {
                dispatch({ type: types.REPOSITORY_LOADED, payload: r}) 
            })
        }).catch((err) => {

        });
    };

}


export function getCommits(reponame, user) {
    console.log('reponame, user',reponame, user )
    return function (dispatch, state) {
        getLastCommits(reponame, user).then((result) => {
            result.json().then(r => {
                console.log('r', r);
                dispatch({ type: types.COMMITS_LOADED, payload: r })
            })
        }).catch((err) => {

        });
    };
}