import axios, { Method } from 'axios';
import { toCamelCaseFields, toSnakeCaseFields } from '@utils/functions';
import { store } from '@redux/store';
// import { fetchCurrentUserLogoutSuccess } from 'Redux/user/actions';
import Cookies from 'js-cookie';
import { resetUser } from '@redux/slices/UserSlice';
import { changeServiceTecDocNotAvailable } from '@redux/slices/ProductsSlice';

const baseURL = process.env.API_BASE_URl;

const timeout = 5 * 60 * 1000;

export const axiosInstance = axios.create({
  baseURL,
  timeout,
  timeoutErrorMessage:
    'The request is too long, maybe there is problem with the internet connection.',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `token ${process.env.NEXT_PUBLIC_DEFAULT_TOKEN}`,
  },
});

axiosInstance.interceptors.request.use((config) => {
  const { data, headers } = config;
  const { user } = store.getState();

  const newHeaders = {
    ...headers,
    'Accept-Language': user?.activeLang || '',
    ...(user?.token && { ...{ Authorization: `token ${user?.token}` } }),
    // 'Accept-Language': user.activeLang ? user.activeLang : '',
  };

  if (!data) {
    return { ...config, headers: newHeaders };
  }

  // const newData = toSnakeCaseFields(data);

  return { ...config, data: data, headers: newHeaders };
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { config, data } = response;

    const { products } = store.getState();

    if (!data) {
      return response;
    }

    const newData = toCamelCaseFields(data);

    if (config?.url?.match('/TD/')) {
      if (newData?.error) {
        store.dispatch({ type: 'products/changeServiceTecDocNotAvailable', payload: true });
      } else {
        store.dispatch({ type: 'products/changeServiceTecDocNotAvailable', payload: false });
      }
    }

    return { ...response, data: newData };
  },
  (error) => {
    const {
      status,
      data,
      config,
      request: { responseText },
    } = error.response;
    const { url } = config;
    const { products } = store.getState();

    // if (
    //   !products?.serviceTecDocNotAvailable &&
    //   status === 400 &&
    //   (JSON.parse(responseText)?.message === 'Service not work' ||
    //     JSON.parse(responseText)?.error) &&
    //   url?.match('/TD/')
    // ) {
    //   store.dispatch({ type: 'products/changeServiceTecDocNotAvailable', payload: true });
    // }

    if (status === 401) {
      // store.dispatch(fetchCurrentUserLogoutSuccess());
      // store.dispatch(logout.initiate({}));
      store.dispatch(resetUser({}));
      store.dispatch({ type: 'cart/resetCartIds', payload: {} });
      // window.location.href = '/sign-in/';
    }

    throw new HttpError(responseText, data, status);
  }
);

class Http {
  post = async (url: string, data, headers = {}, options = {}) => {
    return await axiosInstance
      .post(url, data, { headers, ...options })
      .then((response) => response.data);
  };

  get = async (url: string, headers = {}) => {
    return await axiosInstance.get(url, { headers }).then((response) => response.data);
  };

  put = async (url: string, data, headers = {}) => {
    return await axiosInstance.put(url, data, { headers }).then((response) => response.data);
  };

  delete = async (url: string) => {
    return await axiosInstance.delete(url).then((response) => response.data);
  };

  patch = async (url: string, data, headers = {}, options = {}) => {
    return await axiosInstance
      .patch(url, data, { headers, ...options })
      .then((response) => response.data);
  };

  downloadFile = (url = '', method: Method, data?, fileName = 'file') => {
    const newData = toSnakeCaseFields(data);

    return axios({
      url: `${baseURL}${url}`,
      method,
      data: newData ?? null,
      responseType: 'blob',
      headers: this.getHeaders(),
      // ...this.getHeaders(),
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');

      link.href = url;
      // link.download = `${fileName}.pdf`;
      // link.setAttribute('download', `${fileName}.pdf`);
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  };

  getHeaders = () => {
    // const { user } = store.getState();

    return {
      'Accept-Language': this.getCurrentLang(),
      // Authorization: `token ${user.token}`,
    };
  };

  getCurrentLang = () => {
    // const { user } = store.getState();

    // return user.activeLang ? user.activeLang : '';
    return '';
  };
}

class HttpError extends Error {
  status: string;
  response = null;

  constructor(message, data, status) {
    super(message);
    this.response = { status, data: toCamelCaseFields(data) };
  }
}

const HttpService = new Http();

export default HttpService;
