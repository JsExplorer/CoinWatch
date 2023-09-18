import { useState, useEffect } from 'react'
import FeaturedCoins from './FeaturedCoins';

const FetchAPI = () => {
    const [loading, setLoading] = useState(false)
    const [coins, setCoins] = useState(null)
    const [error, setError] = useState('')

    const baseURL =  `https://api.coingecko.com/api/v3`
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en`

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
    // useEffect(()=> {
    //     const fetchApi = async () => {
    //         try {
    //             const response = await fetch ();
    //             const data = await response.json();
    //             setCoins(data);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchApi();
    // },[])

    // return (
    //     coins={coins}
    // )
    // return (
    //     <div className='featured'>
    //         <div className='container'>
    //         <h2>See the top 10 cryptocurrencies below</h2>
    //         {coins.map((coin, index) => (
    //         <FeaturedCoins
    //         key={index}
    //         name={coin.name}
    //         image={coin.image}
    //         current_price={coin.current_price}
    //         price_change_percentage_24h = {coin.price_change_percentage_24h}
    //         />
    //      ))}
    //      </div>
    //     </div>
    // )
}

export default FetchAPI;