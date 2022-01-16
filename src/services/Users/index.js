import { Auth, API } from 'aws-amplify';


export async function listUsers(limit) {
  let apiName = 'AdminQueries';
  let path = '/listUsers';
  let nextToken;
  let myInit = {
    queryStringParameters: {
      "limit": limit,
      "token": nextToken
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }

  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;

  return rest.Users;
}


export async function getUser(username) {
  let apiName = 'AdminQueries';
  let path = '/getUser';
  let myInit = {
    queryStringParameters: {
      "username": username
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }

  const { ...rest } = await API.get(apiName, path, myInit);
  return rest;
}


export async function disableUser(username) {
  let apiName = 'AdminQueries';
  let path = '/disableUser';
  let myInit = {
    body: {
      "username": username
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }

  return await API.post(apiName, path, myInit);
}


export async function enableUser(username) {
  let apiName = 'AdminQueries';
  let path = '/enableUser';
  let myInit = {
    body: {
      "username": username
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }

  return await API.post(apiName, path, myInit);
}


export async function addUserToGroup(username, groupname) {
  let apiName = 'AdminQueries';
  let path = '/addUserToGroup';
  let myInit = {
    body: {
      "username": username,
      "groupname": groupname
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }

  return await API.post(apiName, path, myInit);
}


export async function listGroups(limit) {
  let apiName = 'AdminQueries';
  let path = '/listGroups';
  let nextToken;
  let myInit = {
    queryStringParameters: {
      "limit": limit,
      "token": nextToken
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }

  const { ...rest } = await API.get(apiName, path, myInit);
  return rest;
}

// export async function listUsersWithRole(limit){
//   let apiName = 'AdminQueries';
//   let path = '/listGroupsForUser';
//   let nextToken;
//   let username;
//   await getUsersUsernames().then((res) => res.map(async (element) => {
//     username = element;
//     let myInit = {
//       queryStringParameters: {
//         "username": username,
//         "token": nextToken
//       },
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
//       }
//     }

//     const { ...rest } = await API.get(apiName, path, myInit);
//     return rest;
//   }))
// }

// export async function getUsersUsernames(){
//   let username = [];
//   await listUsers().then((res) => res.Users.map((element) => {
//     //console.log(element.Username)
//    username.push(element.Username);
//   }));
//   return username;
// }

export async function listUserRole(username) {

  let apiName = 'AdminQueries';
  let path = '/listGroupsForUser';
  let nextToken;
  let myInit = {
    queryStringParameters: {
      "username": username,
      "token": nextToken
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }

  const { ...rest } = await API.get(apiName, path, myInit);
  return rest;
}
