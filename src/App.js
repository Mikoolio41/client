import React from "react";
import Robot from "./components/Robot";
import Search from "./components/Search";
import "./App.css";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      text: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ robots: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleSearch = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { robots, text } = this.state;

    const filterRobots = robots.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    return (
      <div className="tc">
        <Search handleSearch={this.handleSearch} />
        {filterRobots.map((item) => {
          return <Robot robot={item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8000/message")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default App;
