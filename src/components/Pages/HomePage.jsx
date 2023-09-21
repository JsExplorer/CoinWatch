import FeaturedCoins from "../FeaturedCoins/FeaturedCoins";
import TrendingCoins from "../TrendingCoins/TrendingCoins";
import ToggleSwitch from "../Utilities/ToggleSwitch";

const HomePage = () => {
    return (
            <div className='wrapper-container'>
                <TrendingCoins />
                <div>
                 <ToggleSwitch />
                </div>
                <FeaturedCoins />
            </div>
    )
}

export default HomePage;