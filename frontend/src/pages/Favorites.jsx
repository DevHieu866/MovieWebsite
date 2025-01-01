import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContexts"
import MovieCard from "../components/MovieCard"

function Favorite() {
    const{favorites} = useMovieContext()

    if (favorites){
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>        
            </div>
        )
    } else{
        return (
            <div className="favorite-empty">
                <h2> No Favorite Movies Yet</h2>
                <p>Add favorites to display them</p>
            </div>
        )
    }
}

export default Favorite