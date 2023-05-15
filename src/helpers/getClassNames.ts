type Style = {
  [key: string]: string;
};

export const getClassName = (style: Style, classes: string[]) =>
  classes.map((className) => style[className]).join(" ");
