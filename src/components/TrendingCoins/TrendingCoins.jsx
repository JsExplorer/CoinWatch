import { useEffect, useState } from 'react'
import TrendingCoin from './TrendingCoin'
import Skeleton from '../Utilities/Skeleton'

const TrendingCoins = () => {
    const [TrendingCoins, setTrendingCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
                const data = await response.json();
                setTrendingCoins(data.coins);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchApi();
        }, [])

        if (loading) {
            return (
                <Skeleton />
            )
        }

            return (
                <div className='mt-8'>
                    <div>
                    <h1 className='text-2xl mb-2 text text-red-400 font-semibold'>Trending Coins</h1>
                    {TrendingCoins.map((coin) => (
                        <TrendingCoin
                        key={coin.id}
                        coin={coin.item}
                        />
                    ))}
                    </div>
                </div>
    )
}

export default TrendingCoins