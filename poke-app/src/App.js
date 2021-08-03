import { useState, useEffect } from "react";
import "./App.css";
import Display from "./Components/Display";
import UserSearch from "./Components/UserSearch";
import PokeBall from "./images/pokeball.png";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [currentURL, setCurrentURL] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [currentPokeTypes, setCurrentPokeTypes] = useState('');
  const [currentPokeWeight, setCurrentPokeWeight] = useState('');
  const [currentPokeHeight, setCurrentPokeHeight] = useState('');
  const [currentPokeID, setCurrentPokeID] = useState('');


  useEffect(() => {
    async function getPokeData(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (response.status === 404) {
          setIsError(true);
          throw new Error(`Could not Find Pokemon ${response.status}`);
        }
        const data = await response.json();
        setCurrentPokemon(data);
        setCurrentPokeTypes(data.types.map(type => `${type.type.name.capitalCase()} `));
        setCurrentPokeWeight(`${data.weight / 10} kg`);
        setCurrentPokeHeight(`${data.height / 10} m`);
        setCurrentPokeID(`${data.id}`);
        setIsError(false);
      } catch (err) {
        console.error(err.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    }

    getPokeData(currentURL);
  }, [currentURL]);

  return (
    <div className="App">
      <UserSearch
        isError={isError}
        userSearch={userSearch}
        setUserSearch={setUserSearch}
        setCurrentURL={setCurrentURL}
      />
      <Display 
        userSearch={userSearch} 
        pokeData={currentPokemon} 
        types={currentPokeTypes}
        weight={currentPokeWeight}
        height={currentPokeHeight}
        pokeID={currentPokeID}
      />
      {isLoading ? (
        <p>
          Loading...
          <img id="pokeBallImg" src={PokeBall} />
        </p>
      ) : null}
    </div>
  );
}

export default App;
