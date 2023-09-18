import { FiArrowUp, FiArrowDown } from 'react-icons/fi'

const FeaturedCoin = ( {coin} ) => {
    return (
    <div className='grid grid-cols-3 sm:grid-cols-4 font-semibold p-2 rounded border-gray-200 border-5 hover:bg-green-200'>
        <div className='flex items-center gap-2 w-full'></div>
        <img src={coin.image} alt=''/>
        <h3>{coin.name}</h3>
        <p>${coin.current_price.toLocaleString()}</p>
    {coin.price_change_percentage_24h < 0 ? (
        <span className='red'>
            <FiArrowDown />
            {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
        ) : 
        (
            <span className='green'>
            <FiArrowUp />
            {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
        )
    }
    </div>
    )
}

export default FeaturedCoin;