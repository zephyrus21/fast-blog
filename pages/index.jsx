import Head from 'next/head';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
      <div>{auth?.user?.email}</div>
      {auth?.user && <button onClick={(e) => auth.signout()}>Sign Out</button>}
    </div>
  );
}
