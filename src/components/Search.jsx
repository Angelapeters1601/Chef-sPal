import { CiSearch } from "react-icons/ci";
import "./Search.css";

function Search({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search categories of recipes..."
        className="search-input"
        onChange={handleInputChange}
      />
      <CiSearch className="search-icon" />
    </div>
  );
}

export default Search;
