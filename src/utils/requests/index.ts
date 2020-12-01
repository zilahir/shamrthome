import axios from "axios";

export const makeRequestCreator = (): any => {
  let source: any;
  return (apiEndpoint: string, params: any) => {
    if (source) {
      source.cancel();
    }
    source = axios.CancelToken.source();
    return new Promise((resolve, reject) => {
      axios(apiEndpoint, {
        method: "POST",
        cancelToken: source.token,
        data: params,
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  };
};

export const asyncRequest = makeRequestCreator();
