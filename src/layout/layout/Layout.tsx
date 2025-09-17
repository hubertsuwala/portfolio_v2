import React, { ReactNode } from "react";
import { Footer, Navigation } from "@layout";
import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.leftContainer}>
        <Navigation />
        <Footer />
      </div>
      <main className={styles.rightContainer}>{children}</main>
    </div>
  );
};

export default Layout;
