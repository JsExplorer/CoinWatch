import { numFormat } from "../Utilities/Utilis";

const Portfolio = ({ name, totalValue }) => {
    return (
      <div className='grid grid-rows-2 mt-5 border border-solid border-blue-300 p-3'>
        <span>Name : {name}</span>

        <span>Portfolio Value : ${numFormat(totalValue)}</span>
      </div>
    );
  };
  
export default Portfolio;