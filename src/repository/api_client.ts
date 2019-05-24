/* eslint no-return-await: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import { API_BASE_URL } from "react-native-dotenv";

interface HeaderType {
  "Content-Type": string;
  Authorization?: string;
}

class ApiClient {
  public static async get(path: string, token: string) {
    return await this.call(path, "GET", token);
  }

  public static async patch(path: string, token: stirng, body?: object) {
    return await this.call(path, "PATCH", token, body);
  }

  public static async post(path: string, token?: string, body?: object) {
    return await this.call(path, "POST", token, body);
  }

  public static async delete(path: string, token?: string) {
    await this.call(path, "DELETE", token);
    return null;
  }

  private static async call(
    path: string,
    method: string,
    token?: string,
    body?: object
  ) {
    const headers: HeaderType = { "Content-Type": "application/json" };
    if (token) headers.Authorization = `Bearer ${token}`;

    // eslint-disable-next-line no-undef
    const res = await fetch(this.requestUrl(path), {
      headers,
      method,
      credentials: "include",
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (res.status !== 200) throw new Error(data.result);
    return data;
  }

  private static requestUrl = (path: string) => {
    return `${API_BASE_URL}/${path}`;
    // return `http://localhost:3000/api${path}`;
  };
}

// How to use
// public static async send(product: Product, text: string) {
//     await ApiClient.post(`/apis/products/${product.id}/comments`, {
//         text,
//     });
// }
// public static async delete(product: Product) {
//     await ApiClient.delete('/apis/products/' + product.id);
// }

export default ApiClient;
