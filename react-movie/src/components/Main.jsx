/*
Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.
Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante, possiamo pensare allo stile!

Note

il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
Se non viene selezionato alcun genere, devono essere mostrati tutti i film.
BONUS:
Aggiungere un campo di ricerca per filtrare i film anche per titolo.
Creare un sistema per aggiungere nuovi film alla lista tramite un form.*/
import { useState } from "react";

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

  return (
    <main>
      <div className="container mt-5 w-50">
      <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Vuoi un genere preciso?</option>
            {
                movies.map((element , index) =>{
                   return(
                   <option key={index}>
                        {element.genre}
                    </option>
                )})
            }
            
          </select>
        <ul className="list-group list-group-flush">
          {movies.map((element, index) => {
            return (
              <li key={index} className="list-group-item">

<span className="h3">{element.title}</span>

              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
