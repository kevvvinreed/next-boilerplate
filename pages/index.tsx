import { NextPage } from "next";
import Head from "next/head";
import styles from "../src/styles/pages/index.module.css";
import { IPageProps } from "./_app";
import Nav from "@/src/components/Nav";

const Home: NextPage<IPageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Nav />
        <div className={styles.containerOverlay}></div>
        <div className={styles.bodyContainer}>
          <div className={styles.parallaxModal}></div> 
        </div>
      </div>
    </>
  );
};

export default Home;
