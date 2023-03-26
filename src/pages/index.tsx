import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'factorio_calc/styles/Home.module.css'
import Options from 'factorio_calc/components/Options'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Options/>
    </>
  )
}
