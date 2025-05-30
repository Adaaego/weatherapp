const SearchBar = () => {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  