import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}){
    
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e){
        e.preventDefault();
        if(favorite) removeFromFavorites (movie.id)
        else addToFavorites(movie)
    }


    return <div className="bg-gray-300 p-6 rounded-2xl ">
            <div className="movie-poster pb-1 w-fulls relative">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full"/>
                <div className="movie-overlay absolute top-0  w-full h-full">
                    <button className={favorite ? `favorite-btn active` : `favorite-btn`} onClick={onFavoriteClick}>
                        ♡
                    </button>
                </div>
             </div>
             <div className="movie-info">
                <h3 className="overflow-clip line-clamp-2">{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
             </div>
        </div>
    
}

export default MovieCard