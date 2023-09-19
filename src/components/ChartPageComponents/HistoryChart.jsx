import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoryChart = () => {
  const [Chart, setChart] = useState({})
  const { id } = useParams();
  
  // useEffect(() => {
  //     const fetchChart = async () => {
  //       const response = await fetch(
  //         `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7` 
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setChart(data);
  //     };
  //     fetchChart();
  //     }, [id])
  //     console.log(Chart);

  //     const historyChartData = Chart.prices.map(value => ({x: value[0], y: value[1].toFixed(2)}))
  //     console.log(historyChartData);

  //    const options = {
  //       responsive: true,
  //       plugins: {
  //         legend: {
  //           position: 'top',
  //         },
  //         title: {
  //           display: true,
  //           text: 'Chart.js Line Chart',
  //         },
  //       },
  //     };

return (
  <div className='my-8'>
    {/* <Line options={options} data={data} /> */}
  </div>
)
}

export default HistoryChart