import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Hero from './hero'
import About from './about'
import Team from './team'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      <Hero />
      <About />
      <Team />
      <Footer />
      <main className={styles.main}>

      </main>
    </>
  )
}
