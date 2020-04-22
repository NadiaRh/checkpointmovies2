import React, { Component } from 'react';
import './styles/main.css' ;
import Movie from './components/movie';
import Data from './components/data';


class  App extends  Component {
  state= {
    query:'',
  }
  searchText = (event) => {
this.setState({
  query:event.target.value
})
  }
  render ()
 {
   let name =[];
   let year =[];
   Object.keys(Data).forEach(key=> {
        name.push(Data[key].title);
        year.push(Data[key].year);
   })
let newName = name.filter((movie) => {
  return movie.toLowerCase().indexOf(this.state.query) !== -1;
} )
  return (
    <div className="container">
   <div className="input-container">
     <label> Search  for a movie </label>
     <input type="text" placeholder="I want to watch ... " onKeyUp={this.searchText}/>
     <button > + </button>

   </div>
   <div className="movies-container">
  {
     newName.map( (movie,i) =>  {
       return   <Movie name={movie} title={name[i]} year={year[i]} key={i} />
     })
    }

   </div>
   </div>
  );
}
}

export default App;
