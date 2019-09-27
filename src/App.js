import React from "react";
import Header from "./components/headers/index";
import "./app.scss";
import Headlines from "../src/components/headlines/index";

class App extends React.Component {
  state = {
    name: "binod pant"
  };

  changeName = name => {
    this.setState({
      ...this.state,
      name: name
    });
  };

  // changeNameInput = value => {
  //   console.log(event);
  //   this.setState({
  //     ...this.state,
  //     name: value
  //   });
  // };

  render() {
    return (
      <div>
        <button onClick={() => this.changeName("Binod")}>Click Me</button>
        <br />
        <input
          onChange={e =>
            this.setState({
              ...this.state,
              name: e.target.value
            })
          }
          type="text"
          value={this.state.name}
        />
        <br />
        Name: {this.state.name}
      </div>
    );
  }
}

export default App;
