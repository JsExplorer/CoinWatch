import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Skeleton from "../Utilities/Skeleton";


const CoinInfo = () => {
    const [info, setInfo] = useState({})
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchCoinInfo = async () => {
            try {
                const response = await fetch(
                  `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)
                const data = await response.json();
                setInfo(data);
                setLoading(false);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
              fetchCoinInfo();
             }, [id]);

             if(loading){
              return (
                <Skeleton />
              )
             }

              return (
                  <div className='my-8'>
                      <div className='flex items-center gap-3 font-semibold my-5'>
                          <img src={info?.image?.small} alt ={info?.name}/>
                          <h2>{info?.name}</h2>
                      </div>
                  <p className='my-5 text-gray-600 [&>a]:text-blue-500 [&>a]:underline' dangerouslySetInnerHTML={{__html: info?.description?.en}}></p>
                  </div>
              )
}

export default CoinInfo