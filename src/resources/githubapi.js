// apis serao utilizadas nas actions
export function getUserRepo(user) {
    return fetch(`https://api.github.com/users/${user}/repos?access_token=b53632db4fae5b7d49b0ccb9d9b43bfa67bff3d1`)
}

export function getUserRepoStarredFirst(user) {
    return fetch(`https://api.github.com/users/${user}/starred?access_token=b53632db4fae5b7d49b0ccb9d9b43bfa67bff3d1`)
}

export function orderRepoOrdered(user, direction) {
    return fetch(`https://api.github.com/users/${user}/repos?access_token=b53632db4fae5b7d49b0ccb9d9b43bfa67bff3d1&direction=${direction}`)
}

export function getLastCommits(repo, user) {
    return fetch(`https://api.github.com/repos/${user}/${repo}/commits?access_token=b53632db4fae5b7d49b0ccb9d9b43bfa67bff3d1`)
}