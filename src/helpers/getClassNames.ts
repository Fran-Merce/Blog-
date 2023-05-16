type Style = {
  [key: string]: string;
};

export const getClassName = (style: Style, classes: string[]) =>
  classes
    .filter((className) => className !== "")
    .map((className) => style[className])
    .join(" ");
