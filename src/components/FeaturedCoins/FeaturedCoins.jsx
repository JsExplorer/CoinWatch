import { useState, useEffect } from 'react'
import FeaturedCoin from './FeaturedCoin';

const FeaturedList = () => {
    const [coins, setCoins] = useState(null)

    useEffect(() => {
        const fetchApi = async () => {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en` //* CoinGecko API URL for 10 coins
          );
          const data = await response.json();
          console.log(data);
          setCoins(data);
        };
        fetchApi();
        }, [])

    if(!coins) return null;

    return (
        <div>
            <h2>See the top 10 cryptocurrencies below</h2>
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