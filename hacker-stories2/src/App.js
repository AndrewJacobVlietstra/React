import { useEffect, useReducer, useState } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";
import logo from "./images/logo192.png";

// function getSomething(something) {
//   return something;
// }

// const arr1 = ['John', 'Frank', 'Anne', 'Jane'];
// const arr2 = [1, 2, 3, 4];

// Array.prototype.multiplyByTwo = function() {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(this[i] * 2);
//   }
//   return newArr;
// }

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const andrew = new Developer("Andrew", "Vlietstra");
console.log(andrew);
console.log(andrew.getname());

const ACTIONS = {setStories: 'SET_STORIES', removeStory: 'REMOVE_STORY'};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.setStories:
      return action.payload;
    case ACTIONS.removeStory:
      return state.filter((story) => story.id !== action.payload.id);
    default:
      throw new Error("Invalid Action Type...");
  }
};

function App() {
  // console.log('App Renders');
  // Implemented my custom hook useLocalStorage here
  const [userSearch, setUserSearch] = useLocalStorage("search", "");

  // useEffect(() => {
  //   localStorage.setItem('search', userSearch);
  // }, [userSearch])

  const handleSearch = (e) => {
    setUserSearch(e.target.value);
  };

  const initialStories = [
    {
      title: "React Rocks!",
      author: "John",
      url: "https://www.google.com/",
      points: 5,
      id: 0,
    },
    {
      title: "JavaScript is Cool!",
      url: "https://www.youtube.com/",
      author: "Frank",
      points: 8,
      id: 1,
    },
    {
      title: "HTML is Totally Rad!",
      url: "https://www.facebook.com/",
      author: "Jenna",
      points: 21,
      id: 2,
    },
    {
      title: "React is like HTML + JavaScript",
      url: "https://www.facebook.com/",
      author: "Derrick",
      points: 9,
      id: 3,
    },
  ];

  const [stories, dispatchStories] = useReducer(storiesReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Simulating loading these stories asyncly from an API
  const getAsyncStories = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve({ data: { stories: initialStories } }), 2500)
    );

  useEffect(() => {
    setIsLoading(true);
    getAsyncStories()
      .then((result) => {
        dispatchStories({ type: ACTIONS.setStories, payload: result.data.stories });
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const handleRemoveStory = (item) => {
    dispatchStories({ type: ACTIONS.removeStory, payload: item });
  };

  const filteredStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(userSearch.toLowerCase());
  });

  const title = "My Hacker Stories";
  return (
    <div className="App">
      <h1>{title}</h1>
      {/* <Search onSearch={handleSearch} searchValue={userSearch} /> */}
      <InputWithLabel
        id="search"
        type="text"
        value={userSearch}
        onInputChange={handleSearch}
      >
        Search:
      </InputWithLabel>
      <hr />
      {isError && <p>Something went wrong... Try reloading the page!</p>}
      {isLoading ? (
        <p>
          Loading Stories... <img className="react-logo" src={logo} />
        </p>
      ) : (
        <List list={filteredStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
}

// These component functions are similar to classes in a sense
// as they can instantiate as many JSX elements as you want but
// react components are technically not classes
function List({ list, onRemoveItem }) {
  // console.log('List Renders');
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.id} {...item} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
}

function Item({ item, title, url, author, onRemoveItem }) {
  // console.log('Item Renders');

  return (
    <li>
      <span>
        <span>{title} </span>
        <span>
          <a target="_blank" rel="noreferrer" href={url}>
            {author}
          </a>
        </span>
      </span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </li>
  );
}

function Search({ onSearch, searchValue }) {
  // console.log('Search Renders');

  return (
    <>
      <p>
        Searching for '<strong>{searchValue}</strong>';
      </p>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchValue}
        onChange={onSearch}
      />{" "}
      <br />
    </>
  );
}

// Re-usable generalized component, has label and input field
function InputWithLabel({ id, label, value, type, onInputChange, children }) {
  return (
    <>
      <label htmlFor={id}>{children} </label>
      <input type={type} id={id} value={value} onChange={onInputChange} />
    </>
  );
}

export default App;
