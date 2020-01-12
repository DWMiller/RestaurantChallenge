export const urlFormat = str => {
  return str.replace(/ /g, '-').toLowerCase();
};

export const parseUrl = str => {
  return str.replace(/-/g, ' ').toUpperCase();
};

export const getImagePath = str => {
  const [, filename, dimensions, ext] = str.split('-');
  return process.env.PUBLIC_URL + `/images/${filename}-${dimensions}.${ext}`;
};
