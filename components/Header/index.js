import React from "react";
import NextLink from "next/link";
import { useSession } from "next-auth/client";

import styles from "./Header.module.scss";

const Header = () => {
  const [session] = useSession();

  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>Timeline</h1>
      <NextLink href={session ? "/app" : "/signin"}>
        <a className={styles.header__link}>
          {session ? "Dashboard" : "Sign up"}
        </a>
      </NextLink>
    </div>
  );
};

export default Header;
