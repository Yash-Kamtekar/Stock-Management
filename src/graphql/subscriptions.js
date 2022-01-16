/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExpenditure = /* GraphQL */ `
  subscription OnCreateExpenditure {
    onCreateExpenditure {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExpenditure = /* GraphQL */ `
  subscription OnUpdateExpenditure {
    onUpdateExpenditure {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExpenditure = /* GraphQL */ `
  subscription OnDeleteExpenditure {
    onDeleteExpenditure {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSale = /* GraphQL */ `
  subscription OnCreateSale {
    onCreateSale {
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
export const onUpdateSale = /* GraphQL */ `
  subscription OnUpdateSale {
    onUpdateSale {
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
export const onDeleteSale = /* GraphQL */ `
  subscription OnDeleteSale {
    onDeleteSale {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase {
    onCreatePurchase {
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
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase {
    onUpdatePurchase {
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase {
    onDeletePurchase {
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
