import styles from '../styles/Newsfull.module.css'
import Image from 'next/image'
import {
    UilEye,
    UilSchedule
} from '@iconscout/react-unicons'
export default function Newsfull(props) {
    const loaderNews = ({ src }) => { return `${props.image}` }
    const loaderAuthorAvatar = ({ src }) => { return `${props.authoravatar}` }
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <h1>{props.title}</h1>
                <p>{props.miniheadline}</p>
                <div className={styles.imageauthor}>
                    <Image
                        loader={loaderAuthorAvatar}
                        src={props.authoravatar}
                        alt={props.author}
                        layout="fixed"
                        width={39}
                        height={39}
                    />
                </div>
                <span>Por {props.author}</span>
                <em><UilSchedule size={13} color="#000" /> {props.date} <UilEye size={13} color="#000" /> Visualizações <strong>{props.views}</strong></em>
            </div>
            <Image
                loader={loaderNews}
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