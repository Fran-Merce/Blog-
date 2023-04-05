import { Roboto } from "next/font/google";

import { Navbar } from "../navbar/Navbar";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});
export const Layout = ({ children }: Props) => {
  return (
    <div className={(roboto.className, styles.layout)}>
      <Navbar />
      {children}
    </div>
  );
};
