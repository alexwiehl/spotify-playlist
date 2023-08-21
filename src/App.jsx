import { useEffect, useState } from "react";
import {
  Playlist,
  SearchBar,
  SearchResults,
  Track,
  Tracklist,
} from "./components";

const CLIENT_ID = "83a049feff604f5db54fbfc00cb890ca";
const CLIENT_SECRET = "63ed73d3f98941e1949da39e803eeca5";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    //API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((response) => response.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // Search
  async function search() {
    console.log("search for " + searchQuery);

    //Get reqyest using the search to get the
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    const tracks = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchQuery + "&type=track",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.tracks.items));
  }

  return (
    <main>
      {console.log(searchResults)}
      <section className="flex flex-1 justify-center mt-6 mb-6">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          search={search}
        />
      </section>
      <section className="flex flex-1 justify-evenly w-full border-2 border-black">
        <SearchResults searchResults={searchResults} />
        <Playlist />
      </section>
    </main>
  );
}

export default App;
