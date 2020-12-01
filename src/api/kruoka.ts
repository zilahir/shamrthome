import axios, { AxiosResponse } from "axios";

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
