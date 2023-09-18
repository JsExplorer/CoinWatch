import CoinInfo from "../ChartPageComponents/CoinInfo";
import HistoryChart from "../ChartPageComponents/HistoryChart";

const ChartPage = () => {
    return (
        <div className='wrapper-container mt-8'>
            <HistoryChart />
            {/* <CoinInfo /> */}
        </div>
    )
}

export default ChartPage;