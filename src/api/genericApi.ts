import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosInterceptor } from './axiosInterceptor';

export async function fetchData<T>(url: string): Promise<T> {
  const response: AxiosResponse<T> = await axiosInterceptor.get(url, {});
  return response.data;
}

export async function postData<T>(url: string, data: any, config?: AxiosRequestConfig<any>): Promise<T> {
  const response: AxiosResponse<T> = await axiosInterceptor.post(url, data, config);
  return response.data;
}
export async function putData<T>(url: string, data: any, config?: AxiosRequestConfig<any>): Promise<T> {
  const response: AxiosResponse<T> = await axiosInterceptor.put(url, data, config);
  return response.data;
}
export async function deleteData<T>(url: string): Promise<T> {
  const response: AxiosResponse<T> = await axiosInterceptor.delete(url);
  return response.data;
}
