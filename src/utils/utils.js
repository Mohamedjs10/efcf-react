import { DB } from "../database/DB";

export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

export const DB_splitter = (a) => {
  const operator = a * 3;
  const x = operator - 3;
  const y = operator;

  return DB.slice(x, y);
};
