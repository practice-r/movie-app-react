import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddToFavourites';


const App = () => {
	const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
	const getMovieRequest = async () => {

		const url = `http://www.omdbapi.com/?s=${searchValue}&i=tt3896198&apikey=a0e6e95c`;

		const response = await fetch(url);
		const responseJson = await response.json();
        console.log('responseJson', responseJson);
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
        else {
            setMovies([responseJson]);
        }

	};

	useEffect(() => {
		getMovieRequest();
	}, [searchValue]);
	return (
		<div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading={`Movies about ${searchValue}`} />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
            <MovieList movies={movies} favouriteComponent={AddFavourites} />
			</div>
		</div>
	);
};

export default App;