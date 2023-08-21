import Button from "./Button";

function Track({ trackName, artistName, artwork }) {
  return (
    <section className="flex flex-1 justify-evenly px-5 py-4 bg-slate-200 mx-10 my-0.5 hover:bg-slate-300">
      <div className="flex flex-1 items-center">
        <img src={artwork} alt={`Album artwork for ${trackName}`} />
        <div className="ml-5">
          <h1>{trackName}</h1>
          <h2>{artistName}</h2>
        </div>
      </div>
      <Button label="+" />
    </section>
  );
}

export default Track;
