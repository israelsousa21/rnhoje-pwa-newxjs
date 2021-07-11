import styles from '../styles/News.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function News(props){
    const myLoader=({src})=>{
        return `${props.image}`
      }

    var seourl = '/noticia/'+props.seourl
    return(
        <Link href={seourl}>
            <div className={styles.box}>
                <div class={styles.top}>
                    <span>{props.category}</span>
                    <h1>{props.title}</h1>
                    <p>{props.miniheadline}</p>
                </div>
                <Image 
                    loader={myLoader}
                    src={props.image} 
                    alt={props.title} 
                    layout="responsive"
                    width={1280}
                    height={720} 
                />
                <div className={styles.date}>{props.date} - Em <strong>{props.category}</strong></div>
            </div>
        </Link>
    )
}