import { parse } from 'query-string';

export const parseUrlParams = (url) => {
  if (url === undefined) return {};
  let search = url.substr(url.indexOf('?'));
  if (search === '') return {};
  if (search.startsWith('?')) search = search.substr(1);
  return parse(search);
};

export const nouse = (url) => {
  console.log('url', url);
};
