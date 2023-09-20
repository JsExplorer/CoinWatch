import { GetPortfolio, PostPortfolio } from "../Utilities/CRUD/CRUDPortfolio"
import { useState, useEffect } from 'react'
import Portfolio from "./Portfolio"

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

  useEffect(()=> {
    const fetchPortfolio = async () => {
      const data = await GetPortfolio();
      setPortfolio(data);
      console.log(data);

    // Calculate total values here after fetching the data
    const calculatedTotalValues = calculateTotalValues(data.records);
    setTotalValues(calculatedTotalValues); // Update the state with calculated totalValues
    };
    fetchPortfolio();
  },[])

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

  return (
    <div>
      <fieldset className="grid grid-rows-5 mt-10 border border-solid border-gray-300 p-3">
        <legend className="text-2xl">Add data to Portfolio</legend>
        <label>
          Name:{" "}
          <input
            className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="Name"
            minLength={3}
            value={formData.Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Cryptocurrency:{" "}
          <input
          className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
          name="Cryptocurrency" 
          value={formData.Cryptocurrency} 
          onChange={handleChange} 
          />
        </label>
        <label>
          Price:${" "}
          <input 
          className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="Price" 
          value={formData.Price} 
          onChange={handleChange} 
          />
        </label>
        <label>
          Quantity:{" "}
          <input 
          className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="Quantity" 
          value={formData.Quantity} 
          onChange={handleChange} 
          />
        </label>
        <label>
          Total Value: ${" "}
          <input className="shadow appearance-none border border-red-500 rounded py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="TotalValue" 
          value={formData.TotalValue=formData.Quantity*formData.Price} 
          onChange={handleChange} 
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline" 
        type="button" 
        onClick={handleSubmit}
        >
          Submit
        </button>
      </fieldset>
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