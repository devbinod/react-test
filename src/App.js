import React from 'react';
import Header from './components/headers/index'
import './app.scss'
import Headlines from '../src/components/headlines/index'

function App() {
  return (
    <div className="App">
        <Header/>
        <section className="main">
          <Headlines header = "Posts" desc = "click button to render posts"/>
        </section>
    </div>
  );
}

export default App;
