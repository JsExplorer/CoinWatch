import { FiArrowUp, FiArrowDown } from 'react-icons/fi'

const FeaturedCoin = ( {coin} ) => {
    return (
    <div className='card'>
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