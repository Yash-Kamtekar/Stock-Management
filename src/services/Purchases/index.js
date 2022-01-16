import { API } from 'aws-amplify';
import { createExpenditure } from './../../graphql/mutations';
import { createPurchase } from './../../graphql/mutations';



export async function addExpenditure(input = {}) {
    try {
        return await API.graphql({
            query: createExpenditure,
            variables: {
                input: input
            }
        })
    } catch ({ err }) {
        return err;
    }
}

export async function addPurchaseOrders(input = {}) {
    try {
        return await API.graphql({
            query: createPurchase,
            variables: {
                input: input
            }
        })
    } catch ({ err }) {
        return err;
    }
}


export async function getPurchaseOrders() {
    const query = 'query { listPurchases { items { id companyID createdAt currentStatus dateOfOrder id itemsOrdered quantity supplierDetails totalCost updatedAt } } }'
    try {
        return await API.graphql({
            query: query,
        })
    } catch ({ err }) {
        return err;
    }
}

export async function getExpendituresById(input) {
    const query = 'query { listExpenditures (filter: {companyID : {eq: ' + input + '}}) { items {  id expenditur reason companyID createdAt updatedAt } } }'
    try {
        return await API.graphql({
            query: query,
        })
    } catch ({ err }) {
        return err;
    }
}