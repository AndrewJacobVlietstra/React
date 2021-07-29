import { useState } from 'react';
import "./App.css";

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
    this.lastName = lastName
  }

  getname() {
    return `${this.firstName} ${this.lastName}`;
  }

};

const andrew = new Developer('Andrew', 'Vlietstra');
console.log(andrew);
console.log(andrew.getname());

function App() {
  // console.log('App Renders');
  const [userSearch, setUserSearch] = useState('');

  const handleSearch = (e) => {
    setUserSearch(e.target.value);
  };


  const stories = [
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
      point: 8,
      id: 2,
    },
    {
      title: "HTML is Totally Rad!",
      url: "https://www.facebook.com/",
      author: "Jenna",
      point: 21,
      id: 3,
    },
  ];

  const filteredStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(userSearch.toLowerCase());
  });

  const title = 'My Hacker Stories';
  return (
    <div className="App">
      <h1>{title}</h1>
      <Search onSearch={handleSearch} searchValue={userSearch} />
      <hr />
      <List list={filteredStories} />
    </div>
  );
};

// These component functions are similar to classes in a sense
// as they can instantiate as many JSX elements as you want but 
// react components are technically not classes
function List(props) {
  // console.log('List Renders');
  return (
    <ul>
      {props.list.map(item => <Item key={item.id} itemData={item} />)}
    </ul>
  );
};

function Item(props) {
  // console.log('Item Renders');
  return (
    <li>
      <span>{props.itemData.title} </span>
      <span>
        <a target="_blank" rel="noreferrer" href={props.itemData.url}>{props.itemData.author}</a>
      </span>
    </li>
  );
};

function Search(props) {
  // console.log('Search Renders');

  const handleChange = (e) => {
    props.onSearch(e);
  };


  return (
    <>
      <p>Searching for '<strong>{props.searchValue}</strong>';</p>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} /> <br />
    </>
  );
};

export default App;
