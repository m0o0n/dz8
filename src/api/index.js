import axios from 'axios';

const baseInstance = axios.create({
  baseURL: 'https://65325346d80bd20280f55879.mockapi.io/phonebook/api/v1/',
});

export const authHostInsance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
})


export const baseHostInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authHostInsance.interceptors.request.use(authInterceptor);

export const fetchContacts = async () => {
  const { data } = await baseInstance.get('contacts');
  return data;
};

export const addContact = async formData => {
  const { data } = await baseInstance.post('contacts', formData);
  return data;
};

export const deleteContact = async id => {
  const { data } = await baseInstance.delete(`contacts/${id}`);
  return data;
};
