import axios, { AxiosResponse } from "axios";

import { apiendPoints } from "./apiEndpoints";

interface ProductItem {
  productName: string;
  productId: string;
}

export const searchForKruokaProducts = (queryString: string): Promise<any[]> =>
  new Promise((resolve) => {
    axios
      .post("http://localhost:5000/kruoka/findproduct", {
        itemToSearch: queryString,
      })
      .then((result: AxiosResponse) => {
        resolve(result.data.result);
      });
  });

export const insertNewProductItem = (
  productItem: ProductItem
): Promise<any[]> =>
  new Promise((resolve) => {
    axios
      .post(apiendPoints.shopping.insertNewProduct, productItem)
      .then((result: AxiosResponse) => {
        resolve(result.data);
      });
  });
