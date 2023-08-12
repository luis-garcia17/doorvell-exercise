import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <section className={styles.links}>
        <div className={styles.exercise}>
          <a
            href="/doorvell-exercise"
            className={styles.card}
          >
            <h2>
              Doorvell exercise <span>-&gt;</span>
            </h2>
            <p>Click here to view the result of the PDF exercise discussed in the interview</p>
          </a>
        </div>

      </section>
    </main>
  );
}
