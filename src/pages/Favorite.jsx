import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";


function Favorite(){
    const {favorites} = useMovieContext();

    return (
        <div className="grid w-full gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-4">
            {
                favorites.length ? favorites.map(favorite => <MovieCard key={favorite.id} movie={favorite} />) : 
                <div className="inline-block p-12 text-white border-none rounded-md bg-[var(--color-secondary)] w-full text-center ">
                    <h2 className="text-red-600"><b>No Favorite Movies Yet</b></h2>
                    <p>Start Adding movies to your favorites</p>
                </div>
            }
        </div>
    );
    

}

export default Favorite