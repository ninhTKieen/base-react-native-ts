import { API_ENDPOINT } from '@env';
import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

import { getToken } from './token.util';

interface IHttpRequest {
  url: string;
  method: Method;
  data?: any;
  params?: any;
  contentType?: string;
}

class HttpService {
  private readonly http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: API_ENDPOINT,
      timeout: 30000,
    });

    this.http.interceptors.request.use(
      async (config) => {
        const headers: any = config.headers;
        const accessToken = await getToken();

        if (accessToken) {
          headers.Authorization = `Bearer ${accessToken}`;
        }

        return { ...config, headers: config.headers };
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  async request<T>({
    url,
    params,
    data,
    method,
    contentType,
  }: IHttpRequest): Promise<T> {
    const config: AxiosRequestConfig = {
      url,
      method,
      params,
      data,
      headers: {
        'Content-Type': contentType || 'application/json',
      },
    };

    const response = await this.http.request(config);

    return response.data as T;
  }
}

const httpService = new HttpService();

export default httpService;
