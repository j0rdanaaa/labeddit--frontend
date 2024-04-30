import Cookies from "js-cookie";
const API_URL = process.env.REACT_APP_API_URL;

type Options = {
  body?: unknown;
  method: "POST" | "GET" | "PUT";
  headers?: HeadersInit | undefined | any;
};

const fetchApi = async (path: string, options: Options) => {
  try {
    const token = Cookies.get("token");

    let headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (token) {
      headers["Authorization"] = token;
    }

    const response = await fetch(`${API_URL}/${path}`, {
      body: JSON.stringify(options.body),
      method: options.method,
      headers,
    });

    // Fix the json() issue
    try {
      const payload = await response.json();

      if (payload.token) {
        Cookies.set("token", payload.token);
      }
      return payload;
    } catch (error) {}

    return;
  } catch (error: any) {
    return new Error(error);
  }
};

export default fetchApi;
