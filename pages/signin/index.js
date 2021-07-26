import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { signIn, useSession } from "next-auth/client";
import GithubIcon from "../../components/GithubIcon.tsx"

import styles from "./SignIn.module.scss";

const SignIn = () => {
  const [session] = useSession()
  const router = useRouter()

  // if a user is logged it, never show them this page,
  // go straight to app
  useEffect(async () => {
    if (session) {
      router.push('/app')
    }
  }, [session, router])



  return (
    <div className={styles.signin}>
      <h1>Sign In</h1>
      <button className={styles.button} onClick={() => signIn('github')}>
        <GithubIcon />
        <p>Continue with Github</p>
      </button>
    </div>
  );
};

export default SignIn;