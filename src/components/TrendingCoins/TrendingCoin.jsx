
const TrendingCoin = ({ coin }) => {
  return (
    <div className='font-light border-gray-150 border-2 rounded hover:bg-gray-150'>
        <div className='flex items-center gap-2'>
            <span className='font-semibold'>{coin.item.score+1}.</span>
            <img className='w-8' src={coin.item.small} alt=''></img>
            <p classname='gap 2'>{coin.item.name}</p>
            <small className='text-s'>({coin.item.symbol})</small>
        </div>
    </div>
  )
}

export default TrendingCoin