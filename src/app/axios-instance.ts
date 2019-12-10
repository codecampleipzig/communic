import axios from 'axios';
import { environment } from './../environments/environment';

export const axiosInstance = axios.create({
   baseURL: environment.api_url
})