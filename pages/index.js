import Head from 'next/head';
import styles from '../styles/Home.module.scss'

//TODO: create hamburger menu with fancy animation maybe
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speer Assessment</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.frontpageText}>Interactive Concert Experience</h1>
        <h2 className={styles.frontpageText}>Experience your favourite artists like never before and from the comfort of your own home</h2>
        <a href="#" className={styles['btn-mix-noborder']}>TRY IT NOW</a>
      </main>

    </div>
  )
}
