import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/Footer'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>
     );
  }
}
 
export default App;