export const textFormatterLenght = (element: string, limit: number = 16) => {
  return element.trim().length > limit
    ? `${element.substring(0, limit)} ...`
    : element;
};
