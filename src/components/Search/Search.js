import "./Search.css";

export default function Search({ query, search, setQuery }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={setQuery}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
}
