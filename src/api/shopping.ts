import axios, { AxiosResponse } from "axios";

import { apiendPoints } from "./apiEndpoints";

export const getAllProducts = (): Promise<any[]> =>
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
