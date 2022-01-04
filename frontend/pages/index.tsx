import type { NextPage } from "next";
import Head from "next/head";
import Keyboard from "../components/Keyboard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Palavras</title>
        <meta name="description" content="projeto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>PALAVRAS</h1>

        <div className={styles.grid}>Test</div>

        <Keyboard />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
