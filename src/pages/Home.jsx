import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1, title: "A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born A star is Born", release_date: "2018", url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTqyFamk1ts0ZAeCGOLHX6zHd75mmyTd4mlpXW2O7UwXkd4Aqh_Mum0P79MisrvH9-rQBf0Q"},
        {id:2, title: "Black Panther", release_date: "2018", url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTwuum2N-2T-KCeMdd4g1BHXP1XGZ9LYajXyYgPUWVs8CicDhfEc2YqTsxtFvQrL3jauHd1g"},
        {id:3, title: "Mamma Mia", release_date: "2008", url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEOV3lsKoMR0Gr57TlQHEcmM-9M_9e5xH7rb4a5Kqi2Nhmy6ZVgGduuQb6d3Xvv8BKz0-h"}
    ];

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

        <div>
            <div className="grid w-full gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-4">
                {                  
                  movies.map((mov) => (mov.title.toLowerCase().includes(searchQuery.toLowerCase()) && (<MovieCard key={mov.id} movie={mov}/>)))  
                }
            </div>
    </div>
    </>
}

export default Home