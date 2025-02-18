import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

//provider provides states to any of the components wrapped around it
export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    //reading fave from localstorage and adding it to favoritelIST
    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites");
        // string to array
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    //adding to local storage if, there's a change in FAVORITES list
    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    const addToFavorites = (movie)=>{
        // [take prev value, add the new movie]
        setFavorites(prev => [...prev, movie])
        console.log(`ADDED: ${movie.title}`)
    }
    

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    } 

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}