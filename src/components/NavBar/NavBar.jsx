const NavBar = () => {
    return (
        <div className="bg-gray-800 text-white h-14 flex items-center">
            <div className="wrapper-container w-full">
                <div className="flex items-center gap-1 cursor-pointer">
                    <p className='font-semibold'>
                        <span className="text-green-500">Coin</span>
                        <span className="text-blue-500">Watch</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;