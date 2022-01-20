import { ClipboardCheckIcon, HomeIcon, SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const BottomNavigation = () => {

    const [active, setActive] = useState('Home')

    const tabs = [
        {
            title: 'Home',
            icon: <HomeIcon />
        },
        {
            title: 'Profilo',
            icon: <UserIcon />
        },
        {
            title: 'Ordini',
            icon: <ClipboardCheckIcon />
        },
        {
            title: 'Cerca',
            icon: <SearchIcon />
        },
        {
            title: 'Carrello',
            icon: <ShoppingCartIcon />
        },
    ]

    return (
        <div className="sm:hidden">
            <div className="fixed bottom-[62px] z-20 bg-snow h-3 w-full" />
            <div className="w-full h-[62px] fixed bottom-0 z-30 left-0 bg-scarlet flex justify-center items-center rounded-t">
                <ul className="flex w-[310px]">
                    {
                        tabs.map(t => (
                            <li
                                key={t.title}
                                onClick={() => setActive(t.title)}
                                className={`relative list-none w-[62px] z-50 h-[62px] ${t.title === active && 'active'}`}
                            >
                                <Link to={`/${t.title.toLowerCase()}`} className="relative flex justify-center items-center flex-col w-full text-center font-medium cursor-pointer">
                                    <span className={`relative top-5 block leading-[75px] h-[1.2em] w-[1.2em] text-[1.3em] text-center transition duration-500 text-snow ${t.title === active && 'transform -translate-y-8'}`}>
                                        {t.icon}
                                    </span>
                                    <span className={`absolute text-snow font-normal text-[.92em] tracking-[.05em] transition duration-500 trasform translate-y-11 opacity-0 ${t.title === active && 'translate-y-8 opacity-100'}`}>
                                        {t.title}
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                    <div className={`
                        absolute w-[62px] h-[62px] bg-petrol rounded-full border-[6px] border-snow transition duration-500 -top-1/2
                        before:absolute before:top-1/2 before:-left-[22px] before:w-5 before:h-5 before:bg-transparent before:rounded-tr-[20px] before:shadow-[1px_-10px_0_0_#FFFCFF]
                        after:absolute after:top-1/2 after:-right-[22px] after:w-5 after:h-5 after:bg-transparent after:rounded-tl-[20px] after:shadow-[-1px_-10px_0_0_#FFFCFF]
                        ${active === 'Home' ? 'transform translate-x-0' : active === 'Profilo' ? 'transform translate-x-[62px]' : active === 'Ordini' ? 'transform translate-x-[124px]' : active === 'Cerca' ? 'transform translate-x-[186px]' : active === 'Carrello' && 'transform translate-x-[248px]'}
                    `} />
                </ul>
            </div>
        </div>
    )
}

export default BottomNavigation
