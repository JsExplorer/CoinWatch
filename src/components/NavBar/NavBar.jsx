import { useNavigate } from "react-router-dom";
import { GoRocket } from 'react-icons/go'

const NavBar = () => {
    let navigate = useNavigate();
    return (
        <div className="bg-gray-800 text-white h-14 flex items-center">
            <div className="wrapper-container w-full">
                <div className="flex items-center gap-1 cursor-pointer">
                    <button className='font-semibold hover:text-white hover:bg-gray-100' onClick={()=> navigate('/')}>
                        <span className="text-green-500">Coin</span>
                        <span className="text-blue-500">Watch</span>
                    </button>
                    <span>{<GoRocket />}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;