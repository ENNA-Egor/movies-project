import {Movie} from './Movie'

function Movies(props) {
    const {movies=[]} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
        )): <h4>Nothing selected for search. Enter a name in the search field.</h4>
    }
    </div> 
}

export {Movies}