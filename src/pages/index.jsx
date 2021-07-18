import { useState, useEffect } from 'react'
import baseURL from '../data/baseurl'
import Head from 'next/head'
import Topbar from '../components/Topbar'
import Separator from '../components/Separator'
import Menubar from '../components/Menubar'
import News from '../components/News'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [newsData, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const baseurl = baseURL()

  async function loadNews(){
    const perPage = 20;
    const URL = `${baseurl}news/detachhome/?limit=${perPage}&page=${currentPage}`
    const resp = await fetch(URL)
    const freshNews = await resp.json()
    setNews((prevNews) => [...prevNews, ...freshNews.data])
  }

  useEffect(() => {
    loadNews()
  }, [currentPage])
  //console.log(newsData)
  
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        //console.log('Sentinela appears!', currentPage + 1)
        setCurrentPage((currentValue) => currentValue + 1);
      }
    })
    intersectionObserver.observe(document.querySelector('#sentinel'));
    return () => intersectionObserver.disconnect();
  }, []);
 
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
          <News key={news.id} category={news.category}
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
      <div id="sentinel" className={styles.sentinel}></div>

      <Menubar page="home" />

    </div>
  )
}

