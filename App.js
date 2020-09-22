import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
      <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1"></span>

      
        <Link to="/">Beranda</Link> |
        <Link to="/protokol">Protokol</Link> |
        <Link to="/data">Data</Link> |
         <hr />
        <p><Utama /></p>
        </nav>
      </div>
    );
  }
}

export default App;