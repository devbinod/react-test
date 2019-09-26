import React from 'react';
import Header from './components/headers/index'
import './app.scss'
import Headlines from '../src/components/headlines/index'


const tempArr = [{

  fName: 'Binod',
  lName: 'Pant',
  email: 'binodpant.nep@gmail.com',
  age: 24,
  onlineStatus: false
}]

class App extends React.Component {
  

  render() {

    return (
      <div className="App">
          <Header/>
          <section className="main">
            <Headlines header = "Posts" desc = "click button to render posts" tempArr={tempArr}/>
          </section>
      </div>
    );
  }
}

export default App;
