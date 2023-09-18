import { Link } from 'react-router-dom'

const TrendingCoin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
        <div className='font-light border-gray-200 border-2 rounded hover:bg-blue-200'>
            <div className='flex items-center gap-2'>
                <span className='font-semibold'>{coin.score+1}.</span>
                <img className='w-8' src={coin.small} alt=''></img>
                <p classname='gap 2'>{coin.name}</p>
                <small className='text-s'>({coin.symbol})</small>
            </div>
        </div>
    </Link>
  )
}

export default TrendingCoin