import axios, { AxiosResponse } from "axios";

import { MyKRUokaProducts, ShoppingList } from "../types";

import { apiendPoints } from "./apiEndpoints";

export const getAllProducts = (): Promise<MyKRUokaProducts[]> =>
  new Promise((resolve) => {
    axios
      .get(apiendPoints.shopping.getAllProducts)
      .then((result: AxiosResponse) => {
        resolve(result.data);
      });
  });

export const deleteProduct = (productId: number): Promise<any> =>
  new Promise((resolve) => {
    axios
      .delete(`${apiendPoints.shopping.deleteProduct}/${productId}`)
      .then((result: AxiosResponse) => {
        resolve(result.data);
      });
  });

export const getLastShoppingList = (): Promise<ShoppingList> =>
  new Promise((resolve) => {
    axios
      .get(apiendPoints.shopping.lastShoppingList)
      .then((result: AxiosResponse) => {
        resolve(result.data);
      });
  });
