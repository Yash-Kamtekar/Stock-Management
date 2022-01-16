/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExpenditure = /* GraphQL */ `
  query GetExpenditure($id: ID!) {
    getExpenditure(id: $id) {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listExpenditures = /* GraphQL */ `
  query ListExpenditures(
    $filter: ModelExpenditureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenditures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        expenditur
        reason
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSale = /* GraphQL */ `
  query GetSale($id: ID!) {
    getSale(id: $id) {
      id
      product {
        id
        name
        description
        image
        price
        quantity
        custom_attributes
        companyID
        createdAt
        updatedAt
      }
      quantity
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listSales = /* GraphQL */ `
  query ListSales(
    $filter: ModelSaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product {
          id
          name
          description
          image
          price
          quantity
          custom_attributes
          companyID
          createdAt
          updatedAt
        }
        quantity
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      image
      price
      quantity
      custom_attributes
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        price
        quantity
        custom_attributes
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      description
      owner {
        id
        name
        email
        birth_date
        role
        companyID
        createdAt
        updatedAt
      }
      Users {
        items {
          id
          name
          email
          birth_date
          role
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      Products {
        items {
          id
          name
          description
          image
          price
          quantity
          custom_attributes
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      Sales {
        items {
          id
          quantity
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      Expenditures {
        items {
          id
          expenditur
          reason
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner {
          id
          name
          email
          birth_date
          role
          companyID
          createdAt
          updatedAt
        }
        Users {
          nextToken
        }
        Products {
          nextToken
        }
        Sales {
          nextToken
        }
        Expenditures {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      birth_date
      role
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        birth_date
        role
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
      id
      itemsOrdered
      quantity
      dateOfOrder
      supplierDetails
      totalCost
      currentStatus
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemsOrdered
        quantity
        dateOfOrder
        supplierDetails
        totalCost
        currentStatus
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const expendituresByCompany = /* GraphQL */ `
  query ExpendituresByCompany(
    $companyID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelExpenditureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    expendituresByCompany(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        expenditur
        reason
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const salesByCompany = /* GraphQL */ `
  query SalesByCompany(
    $companyID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesByCompany(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        product {
          id
          name
          description
          image
          price
          quantity
          custom_attributes
          companyID
          createdAt
          updatedAt
        }
        quantity
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByCompany = /* GraphQL */ `
  query ProductsByCompany(
    $companyID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCompany(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        image
        price
        quantity
        custom_attributes
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByCompany = /* GraphQL */ `
  query UsersByCompany(
    $companyID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByCompany(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        birth_date
        role
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const purchasesByCompany = /* GraphQL */ `
  query PurchasesByCompany(
    $companyID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasesByCompany(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        itemsOrdered
        quantity
        dateOfOrder
        supplierDetails
        totalCost
        currentStatus
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
