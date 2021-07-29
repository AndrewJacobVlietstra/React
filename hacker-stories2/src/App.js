import "./App.css";

const list = [
  {
    title: "React Rocks!",
    author: "John",
    url: "https://www.google.com/",
    points: 5,
    id: 0,
  },
  {
    title: "React is Cool!",
    url: "https://www.youtube.com/",
    author: "Frank",
    point: 8,
    id: 2,
  },
  {
    title: "React is Awesome!",
    url: "https://www.facebook.com/",
    author: "Steve",
    point: 2,
    id: 3,
  },
  {
    title: "React is Totally Rad!",
    url: "https://www.facebook.com/",
    author: "Jenna",
    point: 21,
    id: 4,
  },
];

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

function App() {
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      <List />
    </div>
  );
};

function List() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <span>{item.title} </span>
          <span>
            <a href={item.url}>{item.author}</a>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default App;
