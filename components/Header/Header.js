import React from "react";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from 'next/router'

import styles from "./Header.module.scss";

const Header = () => {
  const [session] = useSession();
  const router = useRouter()

  const authAction = () => {
    if (session) {
      console.log('authAction')
      signOut()
    } else {
      router.push('/signin')
    }
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>Timeline</h1>
      <button className={styles.header__link} onClick={authAction}>{session ? "Sign Out" : "Sign In"}</button>
    </div>
  );
};

export default Header;
