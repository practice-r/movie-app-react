import React from 'react';

const MovieListHeading = (props) => {
    // console.log('props', props)
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
			{/* <h1>Movies</h1> */}

		</div>
	);
};

export default MovieListHeading;