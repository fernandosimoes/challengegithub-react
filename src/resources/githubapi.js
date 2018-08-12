// apis serao utilizadas nas actions
export function getUserRepo(user) {
    return fetch('https://api.github.com/users/reactjs/repos?access_token=20e673eb6862a4991c7e9c22cc3a254b57fd461b')
        // .then(response => response.json())
        // .then(json => console.log(json))
    }
    
export function getLastCommit(repo, user) {
    return fetch('https://api.github.com/repos/fernandosimoes/vanilajs/commits/master?access_token=20e673eb6862a4991c7e9c22cc3a254b57fd461b')
        // .then(response => response.json())
        // .then(json => console.log(json))
}