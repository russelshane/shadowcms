export const setAccessToken = (s: string) => {
  sessionStorage.setItem('accessToken', s);
};

export const getAccessToken = () => {
  return sessionStorage.getItem('accessToken');
};
