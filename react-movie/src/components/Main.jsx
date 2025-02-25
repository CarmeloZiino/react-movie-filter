/*
Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.
Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante, possiamo pensare allo stile!

Note

il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
Se non viene selezionato alcun genere, devono essere mostrati tutti i film.
BONUS:
Aggiungere un campo di ricerca per filtrare i film anche per titolo.
Creare un sistema per aggiungere nuovi film alla lista tramite un form.*/
import { useState, useEffect } from "react";

const Main = () => {
  const arrayMovie = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  const [movies, setMovies] = useState(arrayMovie);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [search, setSearch] = useState("");

  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    let filtered = movies;

    if (selectedGenre) {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre);
    }

    if (search) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  }, [search, selectedGenre, movies]);

  return (
    <main>
      <div className="container mt-5 w-50">
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tutti i generi</option>
          {[...new Set(movies.map((m) => m.genre))].map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <ul className="list-group list-group-flush">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <li key={index} className="list-group-item">
                <span className="h3">{movie.title}</span> - {movie.genre}
              </li>
            ))
          ) : (
            <li className="list-group-item">Nessun film trovato</li>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Main;
