import { GetPortfolio, PostPortfolio } from "../Utilities/CRUDPortfolio"
import { useState, useEffect } from 'react'
import Portfolio from "./Portfolio"
import Skeleton from "../Utilities/Skeleton"
import SearchBar from "../Utilities/SearchBar"

const UserPage = ( ) => {
  const [portfolio, setPortfolio] = useState([])
  const [formData, setFormData] = useState({
    Name: "",
    Cryptocurrency: "",
    Price: "",
    Quantity: "",
    TotalValue: "",
  });
  const [totalValues, setTotalValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const calculateTotalValues = (records) => {
    const calculatedTotalValues = {};
    records?.forEach((user) => {
      const { Name, Price, Quantity } = user.fields;
      const totalValue = Price * Quantity;

      if (calculatedTotalValues[Name]) {
        calculatedTotalValues[Name] += totalValue;
      } else {
        calculatedTotalValues[Name] = totalValue;
      }
    });

    return calculatedTotalValues;
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await GetPortfolio();
        setPortfolio(data);
        setLoading(false); // Set loading to false when data is fetched
        console.log(data);

        // Calculate total values here after fetching the data
        const calculatedTotalValues = calculateTotalValues(data.records);
        setTotalValues(calculatedTotalValues); // Update the state with calculated totalValues
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPortfolio();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;

    if (name === 'Quantity' || name === 'Price') {
      newValue = parseFloat(value);
      if (isNaN(newValue)) {
        newValue = 0; // Set to 0 if the value is not a valid number
      }
    }

    const totalValue = formData.Quantity * formData.Price

    setFormData({ ...formData, [name]: newValue, TotalValue: totalValue });
  };

  const handleSubmit = async () => {
    try {
      const response = await PostPortfolio({"fields":formData});
      if (!response.ok) {
        // Handle specific error messages if needed
        const errorData = await response.json();
        console.error("Error:", errorData);
      } else {
        console.log("Data successfully posted:", response);
        // Optionally, reset the form after a successful submission
        setFormData({
          Name: "",
          Cryptocurrency: "",
          Price:"",
          Quantity: "",
          TotalValue: "",
        });

      }
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle the error as needed (e.g., show an error message to the user)
    }
  };

  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&` //* CoinGecko API URL for 100 coins
        );
        const data = await response.json();
        console.log(data);
        setCoinData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchCryptoPrice();
  }, []);

  const handleSearch = () => {
    // Filter the coinData based on the searchInput
    const result = coinData.find((coin) =>
      coin.name.toLowerCase() === searchInput.toLowerCase() ||
      coin.symbol.toLowerCase() === searchInput.toLowerCase()
    );
    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult(null);
    }
  };

  if (loading){
    return (
      <Skeleton />
    )
  }

  return (
    <div>
      <fieldset className="grid grid-rows-5 mt-10 border border-solid border-gray-300 p-3">
        <legend className="text-2xl">Add data to Portfolio</legend>
        <label>
          Name:{" "}
          <input
            className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="Name"
            minLength={3}
            value={formData.Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Cryptocurrency:{" "}
          <input
          className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
          name="Cryptocurrency" 
          value={formData.Cryptocurrency} 
          onChange={handleChange} 
          />
        </label>
        <label>
          Price:${" "}
          <input 
          className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="Price" 
          value={formData.Price} 
          onChange={handleChange} 
          />
        </label>
        <label>
          Quantity:{" "}
          <input 
          className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="Quantity" 
          value={formData.Quantity} 
          onChange={handleChange} 
          />
        </label>
        <label>
          {/* Conditionally render the "Total Value" input field */}
          {/* {formData.Quantity > 0 && formData.Price > 0 ? (
            <input
              className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="TotalValue" 
              value={formData.Quantity * formData.Price} 
              onChange={handleChange} 
            />
          ) : (
            // If either Quantity or Price is not greater than 0, display nothing
            null
          )} */}
           {/* Conditionally render the calculated "Total Value" */}
          {formData.Quantity > 0 && formData.Price > 0 && (
            <div className="shadow appearance-none rounded py-1 px-2 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline">
              Total Value: ${formData.Quantity * formData.Price}
            </div>
          )}
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline" 
        type="button" 
        onClick={handleSubmit}
        >
          Submit
        </button>
      </fieldset>
      <div className="col-span-1">
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
          searchResult={searchResult}
        />
      </div>
      <div className="mt-10">
            {Object.keys(totalValues).map((name) => (
            <Portfolio 
              key={name}
              name={name}
              totalValue={totalValues[name]}
            />
          ))}
      </div>
    </div>
  )
}

export default UserPage