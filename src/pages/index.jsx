import { useState, useEffect } from 'react'
import Head from 'next/head'
import Topbar from '../components/Topbar'
import Separator from '../components/Separator'
import Menubar from '../components/Menubar'
import News from '../components/News'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [newsData, setNews] = useState([]);

  async function getNews() {
    const resp = await fetch(`https://rnhoje.com.br/api/v1/news/detachhome/?limit=40&page=1`)
    const dataNews = await resp.json()
    setNews(dataNews.data)
  }
  useEffect(() => {
    getNews()
  }, [])
 
  return (
    <div className={styles.container}>
      <Head>
        <title>RN HOJE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />
      <Separator />
      
      {
        newsData.map((news) => (
          <News category={news.category}
            title={news.title}
            miniheadline={news.miniheadline}
            image={news.photos.medium}
            date={news.datehour}
            visits={news.views}
            seourl={news.seourl}
          />
        ))
      }
      <Separator />

      <Menubar page="home" />

    </div>
  )
}

