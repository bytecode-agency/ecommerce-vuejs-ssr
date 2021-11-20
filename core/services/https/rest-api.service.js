import axios from "axios";

export const RestAPIService = {
  invoke(def, apiInput = {}, data, queryMap, additionalHeaders, handleError) {
    this.invokeAPI(
      def.api(apiInput),
      def.method,
      data,
      queryMap,
      additionalHeaders,
      handleError
    );
  },
  invokeAPI(
    api,
    method,
    body,
    queryMap,
    additionalHeaders = {},
    handleError = true
  ) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...additionalHeaders,
    };

    const httpOptions = { headers: headers, params: queryMap, observe: "body" };
    switch (method) {
      case "POST":
        return this.post(api, body, httpOptions, handleError);
      case "GET":
        return this.get(api, httpOptions, handleError);
      case "PUT":
        return this.put(api, body, httpOptions, handleError);
      case "PATCH":
        return this.patch(api, body, httpOptions, handleError);
      case "DELETE":
        return this.delete(api, body, httpOptions, handleError);
      default:
        break;
    }
  },
  post(apiUrl, body, httpOptions, handleError) {
    return axios({
      method: "post",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err) => this.handleError(err, handleError));
  },
  get(apiUrl, httpOptions, handleError) {
    return axios({
      method: "get",
      url: apiUrl,
      params: httpOptions.params,
      headers: httpOptions.headers,
    }).catch((err) => this.handleError(err, handleError));
  },

  put(apiUrl, body, httpOptions, handleError) {
    return axios({
      method: "put",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err) => this.handleError(err, handleError));
  },

  patch(apiUrl, body, httpOptions, handleError) {
    return axios({
      method: "patch",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err) => this.handleError(err, handleError));
  },

  delete(apiUrl, body, httpOptions, handleError) {
    return axios({
      method: "delete",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err) => this.handleError(err, handleError));
  },
  handleError(error) {
    return Promise.reject(
      error.response && error.response.data ? error.response.data : error
    );
  },
};
