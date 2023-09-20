import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import numFormat from '../Utilities/Utilis'
import { Link } from 'react-router-dom'

const FeaturedCoin = ( {coin} ) => {
    return (
        <Link to={`/coin/${coin.id}`}>
        <div className='grid grid-cols-3 sm:grid-cols-3 font-semibold p-2 rounded border-gray-200 border-t mb-2 hover:bg-green-200 justify-self-center'>
            <div className='flex items-center gap-2 w-full content-center'>
                <img className='w-8' src={coin.image} alt=''/>
                <p>{coin.name}</p>
                <span className='text-s'>({coin.symbol})</span>
            <span className={`flex gap-0.5
            ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
            {coin.price_change_percentage_24h}%
            {coin.price_change_percentage_24h < 0 ? <FiArrowDownRight /> : <FiArrowUpRight />}
            </span>
            </div>
            <span className='flex items-center w-full text-center'>${numFormat(coin.current_price)}</span>
            <div>
                <p className='flex items-center font-semibold'>Market Cap</p>
                <span>${numFormat(coin.market_cap)}</span>
            </div>
        </div>
        </Link>
    )
}

export default FeaturedCoin;