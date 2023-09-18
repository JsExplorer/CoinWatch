import FeaturedCoins from "../FeaturedCoins/FeaturedCoins";
import TrendingCoins from "../TrendingCoins/TrendingCoins";

const HomePage = () => {
    return (
        <div className='wrapper-container'>
            <TrendingCoins />
            <FeaturedCoins />
        </div>
    )
}

export default HomePage;