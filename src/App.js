import React from "react";
import Header from "./components/headers/index";
import "./app.scss";
import Headlines from "../src/components/headlines/index";
import SharedButton from "./components/buttons/index";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";
import ListItem from "../src/components/items/index";

const tempArr = [
  {
    fName: "Binod",
    lName: "Pant",
    email: "binodpant.nep@gmail.com",
    age: 24,
    onlineStatus: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get Posts ",
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headlines
            header="Posts"
            desc="click button to render posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem {...configListItem} key={index} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
