//Basic Async function w/o keywords, callbacks, or promises
//const user = getUser(1); 
//Returns undefinded until setTime is done w/o callback, promise, or async/await

//function getUser(id) {
//    setTimeout(() => {
//      return { id: id, name: 'G'};
//    }, 2000);
//}


//******Callbacks*********
//***************************

/*getUser(1, displayUser)

function displayUser (user) {
    console.log('User ', user);
}

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
}*/


//******PROMISES, PROMISES, PROMISES*******

/*const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(7);
    }, 3000);
})

p.then(result => confirm.log('Result', result))
.catch(err => console.log('Error', err.message));*/

function getUser(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({id: id, gitHubUsername: 'GvDev'});
        }, 2400);
    })
}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'firstProj', 'firstProd', 'secProj'])
        }, 2400);
    })
}

getUser(1)
    .then(user => getRepos(user.gitHubUsername))
    .then(repos => console.log(repos))
    .catch(err => console.log('Error', err.message));