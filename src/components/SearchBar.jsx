import Button from "./Button";

function SearchBar({ searchQuery, setSearchQuery, search }) {
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Find a song"
        className="border-2 border-black py-2 px-3 rounded-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <Button label="Search" />
    </form>
  );
}

export default SearchBar;
