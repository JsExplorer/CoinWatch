import { useEffect, useState } from 'react'
import TrendingCoin from './TrendingCoin'

const TrendingCoins = () => {
    const [TrendingCoins, setTrendingCoins] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
          const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
          const data = await response.json();
          setTrendingCoins(data.coins);
        };
        fetchApi();
        }, [])

        console.log (TrendingCoins);

    return (
        <div className='mt-8'>
            <div>
            <h1 className='text-2xl mb-2'>Trending Coins</h1>
            {TrendingCoins.map((coin, index) => (
                <TrendingCoin
                key={index}
                coin={coin}
                />
            ))}
            </div>
        </div>
    )
}

export default TrendingCoins