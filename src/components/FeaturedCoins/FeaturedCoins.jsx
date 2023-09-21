import { useState, useEffect } from 'react'
import FeaturedCoin from './FeaturedCoin';
import Skeleton from '../Utilities/Skeleton';

const FeaturedList = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
          try {
            const response = await fetch(
              `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en` //* CoinGecko API URL for 10 coins
            );
            const data = await response.json();
            console.log(data);
            setCoins(data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error)
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
          <div className='mt-10'>
              <h1 className='text-2xl mb-2 text-gray-300 font-semibold'>Top 10 cryptocurrencies</h1>
              {coins.map((coin, index) => (
              <FeaturedCoin
              coin={coin}
              key={index}
              name={coin.name}
              image={coin.image}
              current_price={coin.current_price}
              price_change_percentage_24h = {coin.price_change_percentage_24h}
              />
          ))}
          </div>
      )
}

export default FeaturedList;