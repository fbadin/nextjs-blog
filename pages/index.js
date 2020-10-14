import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A great computer engineer!</p>
        <p>
          That's all for this Next.js deployment :P
        </p>
      </section>
    </Layout>
  )
}