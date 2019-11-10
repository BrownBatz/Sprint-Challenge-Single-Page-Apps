import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import {Character} from "./Character.js";
import axios from "axios";
import {Route, Link} from "react-router-dom";
import styled from "styled-components";
import SearchForm from './components/SearchForm'


// So for the data what I'm looking at is I need to grab:
// data.data.results and that array has all of the characters
// Couple of properties I can grab for them is name, status, species

export default function App() {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    console.log("Use effect ran");
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(data => setChars(data.data.results))
    .catch(error => {
      console.log(`There was an error: ${error}`);
    })
  }, []);

  return (
    <main>
      <Header />
      <Route exact path="/">
        <Link to="/characters">Characters</Link>
      </Route>
      <Route path="/characters">
        <Link to="/">Home</Link>
        <SearchForm charProps={chars}/>
        {chars.map(i => {
            return (<Character character={i} />)
        })}
      </Route>
    </main>
  );
}
