import Track from "./Track";

function SearchResults({ searchResults }) {
  return (
    <section className="flex-1 w-full border-2 border-red-500 pt-5 pb-5">
      {searchResults.map((track, i) => {
        return (
          <Track
            key={track.id}
            trackName={track.name}
            artistName={track.artists[0].name}
            artwork={track.album.images[2].url}
          />
        );
      })}
    </section>
  );
}

export default SearchResults;
