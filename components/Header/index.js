import React from "react";
import NextLink from "next/link";
// import { useSession } from "next-auth/client";

import styles from "./Header.module.scss";

const Header = () => {
  // const [session] = useSession();
  const session = false;

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

  // return (
  //   <nav>
  //     <Pane width="100vw" paddingY={majorScale(1)} borderBottom height={majorScale(9)}>
  //       <Container height="100%">
  //         <Pane display="flex" justifyContent="space-between" alignItems="center" height="100%">
  //           <Logo />

  //           <Pane display="flex" justifyContent="space-around" alignItems="center">
  //             {links && links.length > 0
  //               ? links.map((link) => (
  //                   <Pane paddingX={majorScale(3)} key={link.name}>
  //                     <NextLink href="/blog">
  //                       <a>
  //                         <Text fontSize="16px">Blog</Text>
  //                       </a>
  //                     </NextLink>
  //                   </Pane>
  //                 ))
  //               : null}

  //             <Pane paddingX={majorScale(3)}>
  //               <NextLink href={session ? '/app' : '/signin'}>
  //                 <a>
  //                   <Button appearance="primary" fontSize="16px">
  //                     {session ? 'Dashboard' : 'Sign up'}
  //                   </Button>
  //                 </a>
  //               </NextLink>
  //             </Pane>
  //           </Pane>
  //         </Pane>
  //       </Container>
  //     </Pane>
  //   </nav>
  // )
};

export default Header;
