import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { GoRocket } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'

const NavBar = () => {
    let navigate = useNavigate();
    const Links = [
        {name:'Home', link: '/'},
        {name: 'Users', link: '/user'},
    ]
    const [menu, setMenu] = useState(false);

    return (
        <div className="bg-gray-800 text-white h-14 flex items-center">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-1 cursor-pointer">
                    <button className='font-semibold hover:text-white hover:bg-gray-100' onClick={()=> navigate('/')}>
                        <span className="text-green-500 text-2xl">Coin</span>
                        <span className="text-blue-500 text-2xl">Watch</span>
                    </button>
                    <span>{<GoRocket />}</span>
                </div>
                <div>
                    <div className="text-2xl absolute right-8 top-6 cursor-pointer" onClick={()=> setMenu(!menu)}>
                       <span className={menu ? 'true': 'false'}>
                        {menu ? <AiFillCloseCircle /> : <GiHamburgerMenu />}
                       </span>
                       {console.log("Menu state:", menu)}
                    </div>
                    {/* <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto w-full md:w-auto md:pl-0 md:pl-9 transitional-all duration-500 ease-in ${menu ? 'top-50':'-top-64'}`}>
                        {
                            Links.map((link)=> (
                                <li key={link.name} className="md:ml-8 text-xl">
                                    <a href={link.link} className="font-semibold hover:text-white duration-500">{link.name}</a>
                                </li>
                            ))
                        }
                    </ul> */}
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute z-[-1] left-0 md:static md:z-auto w-full md:w-auto md:pl-0 md:pl-9 transitional-all duration-500 ease-in ${menu ? 'top-50' : '-top-64'}`} style={{ backgroundColor: 'red', opacity: 0.5 }}>
                            {
                                Links.map((link)=> (
                                    <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                        <a href={link.link} className="font-semibold hover:text-white duration-500">{link.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;