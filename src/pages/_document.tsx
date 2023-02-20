import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='container_grid'>
        <section className='overall-layout'>
          <Main />
        <NextScript />
        </section>
       
      </body>
    </Html>
  )
}
