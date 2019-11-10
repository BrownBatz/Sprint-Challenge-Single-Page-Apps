import React, { useState } from "react";
import styled from "styled-components";
import {Route, Link} from "react-router-dom";
import {Character} from "../Character";

const StyledSearch = styled.section`
  margin: 0 auto;
  margin-top: 20px;
`;

export default function SearchForm({charProps}) {
  const [char, setChar] = useState({});

  const Filtered = (evt) => {
    console.log(evt.target.value)
    const searchCharArray = charProps.filter(i => i.name === evt.target.value);
    const searchChar = searchCharArray[0];
    console.log(searchChar);
    if(!searchChar){}
    else {
      setChar(searchChar);
      console.log(char);
    }
  }

  return (
    <StyledSearch>
      <form onSubmit={evt => {evt.preventDefault();}}>
        <input 
          placeholder="Search Character Full Name"
          type="text"
          onChange={Filtered}
        />
      </form>

      <Route path="/characters/filtered">
        <Character /> 
      </Route>
    </StyledSearch>
  );
}
