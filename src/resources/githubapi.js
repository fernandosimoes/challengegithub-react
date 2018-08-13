export function getUserRepo(user, credential) {
    return fetch(`https://api.github.com/users/${user}/repos?access_token=${credential}`)
}

export function getUserRepoStarredFirst(user, credential) {
    return fetch(`https://api.github.com/users/${user}/starred?access_token=${credential}`)
}

export function orderRepoOrdered(user, direction, credential) {
    return fetch(`https://api.github.com/users/${user}/repos?access_token=${credential}&direction=${direction}`)
}

export function getLastCommits(repo, user, credential) {
    return fetch(`https://api.github.com/repos/${user}/${repo}/commits?access_token=${credential}`)
}