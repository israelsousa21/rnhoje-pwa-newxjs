import Image from 'next/image'
import error404Img from '../../public/images/miscelanious/error-404.png'
import styles from '../styles/Custom404.module.css'
import { UilEstate } from '@iconscout/react-unicons'
import Link from 'next/link'
export default function Custom404() {
    return (
        <div className={styles.box}>
            <Image
                src={error404Img}
                alt="Error 404"
                layout="responsive"
                width={200}
                height={148}
            />
            <Link href="/">
                <a>
                    <button><UilEstate size={16} color="#ffffff" /> PÁGINA INICIAL</button>
                </a>
            </Link>
        </div>
    )
}