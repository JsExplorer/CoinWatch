import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { GoRocket } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'

const NavBar = () => {
    let navigate = useNavigate();
    const Links = [
        {name:'Home', link: '/'},
        {name: 'Portfolios', link: '/user'},
    ]
    return (
            <div className="navbar bg-base-100 bg-gray-800 text-white h-14 flex items-center">
                    <div className="flex-1">
                            <button className='font-semibold hover:text-white hover:bg-gray-100' onClick={()=> navigate('/')}>
                                <span className="text-green-500 text-2xl">Coin</span>
                                <span className="text-blue-500 text-2xl">Watch</span>
                            </button>
                            <span>{<GoRocket />}</span>
                    </div>
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] bg-gray-700 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0 origin-top-right">
                                {
                                Links.map((link)=> (
                                    <li key={link.name}>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
            </div>
            )
}

export default NavBar;