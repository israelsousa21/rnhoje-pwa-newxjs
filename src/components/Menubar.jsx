import styles from '../styles/Menubar.module.css'
import Link from 'next/link'
import { UilEstate, 
         UilLocationPoint, 
         UilSearch,
         UilBookmark,
         UilBars } from '@iconscout/react-unicons'

export default function Menubar(props){
    var sizeIcon = 22
    var colorIconUnselected = '#909090'
    var colorIconSelected   = '#050505'

    var colorHome   = (props.page === 'home') ? colorIconSelected : colorIconUnselected
    var colorPin    = (props.page === 'cidade') ? colorIconSelected : colorIconUnselected
    var colorSearch = (props.page === 'busca') ? colorIconSelected : colorIconUnselected
    var colorSave   = (props.page === 'salvos') ? colorIconSelected : colorIconUnselected
    var colorMenu   = (props.page === 'menu') ? colorIconSelected : colorIconUnselected
    
    return(
        <div className={styles.box}>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <UilEstate size={sizeIcon} color={colorHome} />
                            <span style={{color:colorHome}}>início</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/cidade">
                        <a>
                            <UilLocationPoint size={sizeIcon} color={colorPin} />
                            <span style={{color:colorPin}}>minha cida...</span>
                        </a>
                    </Link>
                </li>
                
                <li>
                    <Link href="/busca">
                        <a>
                            <UilSearch size={sizeIcon} color={colorSearch} />
                            <span style={{color:colorSearch}}>busca</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/salvos">
                            <a>
                                <UilBookmark size={sizeIcon} color={colorSave} />
                                <span style={{color:colorSave}}>salvos</span>
                            </a>
                    </Link>
                </li>
                <li>
                    <Link href="/menu">
                        <a>
                            <UilBars size={sizeIcon} color={colorMenu} />
                            <span style={{color:colorMenu}}>menu</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}