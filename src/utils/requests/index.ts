import axios from "axios";

export const makeRequestCreator = (apiEndpoint: string): any => {
  let source: any;
  return (params: string) => {
    if (source) {
      source.cancel();
    }
    source = axios.CancelToken.source();
    return new Promise((resolve, reject) => {
      axios(apiEndpoint, {
        cancelToken: source.token,
        params,
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  };
};

export const asyncRequest = (apiEndpoint: string): any =>
  makeRequestCreator(apiEndpoint);
