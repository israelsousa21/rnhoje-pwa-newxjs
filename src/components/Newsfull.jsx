import styles from '../styles/Newsfull.module.css'
import Image from 'next/image'
export default function Newsfull(props) {
    const myLoader = ({ src }) => {
        return `${props.image}`
    }
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <h1>{props.title}</h1>
                <p>{props.miniheadline}</p>
                <span>Por {props.author}</span>
                <em>{props.date} - <strong>{props.views}</strong></em>
            </div>
            <Image
                loader={myLoader}
                src={props.image}
                alt={props.title}
                layout="responsive"
                width={1280}
                height={720}
            />
            <div className={styles.news} dangerouslySetInnerHTML={{__html: props.text}} />
        </div>
    )
}