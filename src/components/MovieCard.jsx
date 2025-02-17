import { useState } from "react";

function MovieCard({movie}){
    const [state, updateState] = useState(false);
    


    function onFavoriteClick(){
        alert("clicked");
    }

    return <div className="bg-gray-300 p-6 rounded-2xl ">
            <div className="movie-poster pb-1 w-fulls relative">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full"/>
                <div className="movie-overlay absolute top-0  w-full h-full" onMouseEnter={()=> updateState(true)} onMouseLeave={()=>updateState(false)}>
                    <button className="favorite-btn absolute right-0 m-3 hidden" onClick={onFavoriteClick}>
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