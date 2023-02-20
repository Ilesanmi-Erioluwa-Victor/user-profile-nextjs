import Head from 'next/head'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dribble User Design</title>
        <meta name="description" content="Got this design from Dribble from this user :[Jordan Hughes]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <h1 className={`text-3xl font-bold underline text-orange-700 ${inter.className}`}>
      Hello world!
    </h1>
    </>
  )
}
