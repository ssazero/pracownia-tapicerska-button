export const getNumberFromString = (str: string): number =>
  Number(str.replace(/\D/g, ''));

export const compareNames = (a: string, b: string): number =>
  getNumberFromString(a) - getNumberFromString(b);
