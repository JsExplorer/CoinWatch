import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


const CoinInfo = () => {
    const [info, setInfo] = useState({})
    const { id } = useParams();
    const [status, setStatus] = useState("idle");
    
    useEffect(() => {
        const fetchCoinInfo = async () => {
            try {
                setStatus("loading");
                const response = await fetch(
                  `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)
                  if (!response.ok){
                    throw new Error("Network response was not OK");
                  }
                    const data = await response.json();
                    console.log(data);
                    setStatus("success");
                    setInfo(data);
                  } catch (error) {
                    setStatus("error");
                    console.log(error);
                  }
                 };
            fetchCoinInfo();
             }, [id]);
        // console.log(info);

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