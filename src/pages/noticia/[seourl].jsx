import { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Topbarnews from '../../components/Topbarnews'
import Separator from '../../components/Separator'
import Newsfull from '../../components/Newsfull'

export default function Seourl(){
    const router = useRouter()
    const [newsData, setNews] = useState([])

    async function getNews() {
        const resp = await fetch(`https://rnhoje.com.br/api/v1/news/${router.query.seourl}`)
        const dataNews = await resp.json()
        setNews(dataNews.data)
    }
    useEffect(() =>{
      getNews()
    }, [])


    // let currentUrlParams = new URLSearchParams(window.location.search)
    // currentUrlParams.set('page', pageNumber)
    // this.props.history.push(window.location.pathname + "?" + currentUrlParams.toString())
            if(newsData === null){
                getNews()
            }
            return(
            <>
            {            
            newsData?.map((news) =>(
            <>
            <Topbarnews 
                category={news.category}
                seourl={news.seourl}
            />
            <Separator />
            <Newsfull 
                title={news.title}
                miniheadline={news.miniheadline}
                author={news.author_name}
                date={news.datehour}
                views={news.views}
                image={news.photos.big}
                text={[news.text]}
            />
            </>
            ))
            }
            </>
        )    
}