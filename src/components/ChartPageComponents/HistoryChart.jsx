import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import moment from "moment";
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
import Skeleton from "../Utilities/Skeleton";



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
  const [Chart, setChart] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      const fetchChart = async () => {
        try {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7` 
          );
          const data = await response.json();
          setChart(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data;', error);
        }
      };
      fetchChart();
      }, [id])

      if (loading) {
        return (
          <div>
            <Skeleton />
          </div>
        )
      }

      const historyChartData = Chart?.prices?.map(value => ({x: value[0], y: value[1].toFixed(2)}))
      console.log(historyChartData);

      const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: `History chart of ${id}`,
            },
          },
        };

      const data = {
        labels: historyChartData?.map(value=> moment(value.x).format('ll')),
        datasets: [
          {
            label: '7day chart',
            data: historyChartData?.map(value=> value.y),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          // {
          //   label: 'Dataset 2',
          //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          //   borderColor: 'rgb(53, 162, 235)',
          //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
          // },
        ],
      };


      return (
        <div className='my-8'>
          <Line options={options} data={data} />
        </div>
      )
}

export default HistoryChart