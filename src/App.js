import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=7.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                <h4>{movie.title}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
