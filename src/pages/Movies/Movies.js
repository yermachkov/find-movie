import { useEffect, useState } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import api from 'services/movies-api';
import { Box } from 'components/Box';

export const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get('query') ?? '');
  const location = useLocation();

  useEffect(() => {
    if (!searchParams.get('query')) return;

    const getMovies = async () => {
      const movies = await api.fetchMoviesByQuery(searchParams.get('query'));
      setMovieList(movies);
    };
    getMovies();
  }, [searchParams]);

  const handleInput = e => {
    const name = e.target.value.toLowerCase().trim();
    setMovieName(name);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const nextParams = movieName !== '' ? { query: movieName } : {};
    setSearchParams(nextParams);
    // const movies = await api.fetchMoviesByQuery(movieName);
    // setMovieList(movies);
    setMovieName('');
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={movieName}
          onChange={handleInput}
        />
        <button type="submit" aria-label="search">
          Search
        </button>
      </form>

      <Box as="ul" display="flex" flexDirection="column" gridGap={15} mt={15}>
        {movieList &&
          movieList.map(({ id, title, poster_path, release_date }) => {
            const imgUrl = poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://via.placeholder.com/395x574?text=No+poster';

            const release = release_date
              ? release_date.slice(0, 4)
              : 'No release date';

            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  <Box display="flex" gridGap={10}>
                    <img
                      src={imgUrl}
                      alt={`Movie poster of ${title}`}
                      loading="lazy"
                      data-id={id}
                      width={200}
                    />
                    <div>
                      <h2>{title}</h2>
                      <p>{release}</p>
                    </div>
                  </Box>
                </NavLink>
              </li>
            );
          })}
      </Box>
    </main>
  );
};
