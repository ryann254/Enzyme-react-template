import React from 'react'
import Header from './components/header'
import Headline from './components/headline'
import './App.scss'

const tempArr = [{
  fName: 'Issei',
  lName: 'Hyoudou',
  email: 'issei@gmail.com',
  profession: 'pervert',
  age: 15,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render the post" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
