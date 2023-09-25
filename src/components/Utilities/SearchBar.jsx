// SearchBar.jsx
const SearchBar = ({ searchInput, setSearchInput, handleSearch, searchResult }) => {
  return (
    <div className="bg-gray-600 rounded-lg shadow-md p-2 space-y-2">
      <div className="flex space-x-2 items-center">
        <input
          type="text"
          placeholder="Search for a cryptocurrency"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>
      {searchResult && (
        <div>
          <h2 className="text-lg font-semibold">{searchResult.name}</h2>
          <img src={searchResult.image} alt={searchResult.name} className="mt-1 rounded h-10 w-10" />
          <p><span className="font-semibold">Symbol:</span> {searchResult.symbol}</p>
          <p><span className="font-semibold">Current Price: $USD </span> {searchResult.current_price}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
