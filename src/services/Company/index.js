import { API } from 'aws-amplify';
import { createCompany, deleteCompany, updateCompany } from './../../graphql/mutations';
import { getCompany, listCompanys, usersByCompany } from './../../graphql/queries';

export async function addCompany(variables) {
    try {
        return await API.graphql({
            query: createCompany,
            variables: variables
        })
    } catch ({ err }) {
        return err;
    }
}

export async function allCompanys() {
    try {
        return await API.graphql({
            query: listCompanys
        })
    } catch ({ err }) {
        return err;
    }
}

export async function editCompany(variables) {
    try {
        return await API.graphql({
            query: updateCompany,
            variables: variables
        })
    } catch ({ err }) {
        return err;
    }
}

export async function removeCompany(id) {
    try {
        return await API.graphql({
            query: deleteCompany,
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

export async function singleCompany(id) {
    try {
        return await API.graphql({
            query: getCompany,
            variables: { id: id }
        })
    } catch (err) {
        return err;
    }
}

export async function getUsersByCompany(companyID) {

    try {
        return await API.graphql({
            query: usersByCompany,
            variables: {
                companyID: companyID
            }
        })
    } catch (err) {
        return err;
    }
}