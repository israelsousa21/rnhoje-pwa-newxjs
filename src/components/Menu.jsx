import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import IconHome from '../../public/images/icons/icon-home.png'
import IconPin from '../../public/images/icons/icon-pin.png'
import IconSearch from '../../public/images/icons/icon-search.png'
import IconSave from '../../public/images/icons/icon-save.png'
import IconMenu from '../../public/images/icons/icon-menu.png'
export default function Menu(){
    var sizeImg = 22
    return(
        <div className={styles.box}>
            <ul>
                <li>
                    <Image src={IconHome} alt="Início" width={sizeImg} height={sizeImg} />
                    <span>início</span>
                </li>
                <li>
                    <Image src={IconPin} alt="Minha Cidade" width={sizeImg} height={sizeImg} />
                    <span>minha cida...</span>
                </li>
                <li>
                    <Image src={IconSearch} alt="Busca" width={sizeImg} height={sizeImg} />
                    <span>busca</span>
                </li>
                <li>
                    <Image src={IconSave} alt="Salvo" width={sizeImg} height={sizeImg} />
                    <span>salvos</span>
                </li>
                <li>
                    <Image src={IconMenu} alt="Menu" width={sizeImg} height={sizeImg} />
                    <span>menu</span>
                </li>
            </ul>
        </div>
    )
}