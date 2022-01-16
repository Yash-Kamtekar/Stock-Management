import { API } from 'aws-amplify';
import { createUser, deleteUser, updateUser } from './../../graphql/mutations';
import { getUser, listUsers } from './../../graphql/queries';
import { addUserToGroup } from './../Users';

export async function addUser(variables) {
    try {
        return await API.graphql({
            query: createUser,
            variables: variables
        })
    } catch ({ err }) {
        return err;
    }
}

export async function allUsers() {
    try {
        return await API.graphql({
            query: listUsers
        })
    } catch ({ err }) {
        return err;
    }
}

export async function editUser(variables) {
    try {
        return await API.graphql({
            query: updateUser,
            variables: variables
        })
    } catch ({ err }) {
        return err;
    }
}

export async function removeUser(id) {
    try {
        return await API.graphql({
            query: deleteUser,
            variables: {
                input: {
                    id: id
                }
            }
        })
    } catch (err) {
        return err;
    }
}

export async function singleUser(id) {
    try {
        return await API.graphql({
            query: getUser,
            variables: { id: id }
        })
    } catch (err) {
        return err;
    }
}
// Only use this function when using user role
export async function UsersRoleUpdate(username, groupname){

    try {
        return await addUserToGroup(username, groupname).then(() => {
            editUser({input: {
                id: username,
                role: groupname
            }})
        })
    } catch(err) {
        return err;
    }
}

