import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import {ring} from 'ldrs';

ring.register()

function Home(){


    const [searchQuery, setSearchQuery] = useState(""); 
    const [movies, setMovies] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    // useEffect(): ()=> function that runs, if dependency array changes it will re-run the function, if there's only
    // an empty array, it will only run once
    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err){
                console.log(err)
                setError(err);
            }
            finally{setLoading(false)}
        }
        loadPopularMovies(); 
    }, [])

    const handleSearch = (e) =>{
        e.preventDefault();
        alert(searchQuery);
    }

    return <>
        <form onSubmit={handleSearch} className="search-form w-full flex flex-row">
            <input type="text" 
            placeholder="Search for movie" 
            className="search-input w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button p-4 bg-red-700 cursor-pointer text-white">Search</button>
        </form>
        {
            error && <div className="error-message">{error}</div>
        }
        {        
            loading ? 
            <div className="w-full text-center justify-center content-center p-12 text-amber-50 space-y-6"> 
                <l-ring size="80" color="red"></l-ring> 
                <p>Loading......</p>
            </div> : 
            <div>
                <div className="grid w-full gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-4">
                {                  
                  movies.map((mov) => (mov.title.toLowerCase().includes(searchQuery.toLowerCase()) && (<MovieCard key={mov.id} movie={mov}/>)))  
                }
                </div>
            </div>
        }    
        
    </>
}

export default Home