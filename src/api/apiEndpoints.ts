import { apiRoot } from "../utils/consts";

export const apiendPoints = {
  kruoka: {
    findProduct: `${apiRoot}/kruoka/findproduct`,
  },
  shopping: {
    insertNewProduct: `${apiRoot}/shopping/product/insert`,
    getAllProducts: `${apiRoot}/shopping/products`,
    deleteProduct: `${apiRoot}/shopping/product/delete`,
    lastShoppingList: `${apiRoot}/shopping/lastshoppinglist/get`,
  },
};
