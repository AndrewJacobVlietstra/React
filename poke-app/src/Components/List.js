import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';

function List() {
    const [currentURL, setCurrentURL] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`);
    const [nextURL, setNextURL] = useState(``);
    const [prevURL, setPrevURL] = useState(``);
    const [currentPokemon, setCurrentPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPokeData() {
            setIsLoading(true);
            const response = await fetch(currentURL);
            const data = await response.json();
            setCurrentPokemon(data.results);
            setNextURL(data.next);
            setPrevURL(data.previous);
        }
        
        fetchPokeData();
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
    }, [currentURL]);

    function prevPage(e) {
        e.preventDefault();
        setCurrentURL(prevURL);
    };

    function nextPage(e) {
        e.preventDefault();
        setCurrentURL(nextURL);

    };

    return (
        <>
            {isLoading && <p style={{color: 'skyblue'}}>Loading Pokemon Data...</p>}
            <form>
                <ul>
                    {currentPokemon.map(poke => <li key={poke.name}>{poke.name}</li>)}
                </ul>
                <Pagination prevPage={prevPage} nextPage={nextPage}/>
            </form>
        </>
    );
};

export default List;
