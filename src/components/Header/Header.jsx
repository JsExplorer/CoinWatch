import "./Header.css";
import crypto from "../../assets/Crypto.png"

const Header = () => {
    return (
        <div className = "header">
            <div className = 'container'>
                <h1> CoinWatch </h1>
                <h2>For real-time market data and conversion rates for cryptocurrencies.</h2>
            </div>
                <div className = "image-container">
                    <img src={crypto} alt=""/>
                </div>
        </div>
    )
}
export default Header;