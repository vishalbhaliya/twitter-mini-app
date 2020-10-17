import { getCookie } from "./Cookies";

const { API_BASE_URL } = require("../config/constants");

export function callAPI(url, body = {}, method = "POST") {
  return new Promise((resolve, reject) => {
		const token = getCookie("token")

    let options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? "Bearer "+ token : null,
      },
      credentials:"include",
      body: JSON.stringify(body),
    }; 
    if (method === 'GET') {
      delete options.body;
    }
    fetch(API_BASE_URL + url, options)
      .then((res) => res.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
}
