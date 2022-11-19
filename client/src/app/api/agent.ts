import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:5001/api/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody)
}

const Catalog = {
  list: () => requests.get('products'),
  details: (id: number) => requests.get(`products/${id}`)
}

const TestErrors = {
  get400Error: () => requests.get("buddy/bad-request"),
  get401Error: () => requests.get("buddy/unauthorized"),
  get404Error: () => requests.get("buddy/not-found"),
  get500Error: () => requests.get("buddy/server-error"),
  getValidationError: () => requests.get("buddy/validation-error"),
}

const agent = {
  Catalog,
  TestErrors
}

export default agent