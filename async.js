//const user = getUser(1); Returns undefinded until setTime is done w/o callback, promise, or async/await

//function getUser(id) {
//    setTimeout(() => {
//      return { id: id, name: 'G'};
//    }, 2000);
//}


//Callbacks
getUser(1, (user) => {
    console.log('User ', user)
})

getRepos(user.gitHubUserName, (repos) => {
    console.log('Repos ', repos);
})

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Async call');
        callback({ id: id, gitHubUserName: 'Gene'});
    }, 3000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log('Async call...');
        callback(['repo1', 'firstProj', 'updatedProj', 'secProj'])
    })
}