import React, {useState} from "react";
import Header from "./components/Header.js";
import styled from "styled-components";

const StyledCard = styled.div`
    margin: 0 auto;
    width: 60%;
    border: 2px solid black;
    border-radius: 40px;
    margin-top: 20px;
    text-align: center;
    padding: 10px;
`;

export function Character({character}){
    const [properties, setProperties] = useState({name: character.name, status: character.status, species: character.species});

    return(
        <StyledCard>
            <h2>{properties.name}</h2>
            <h3>{properties.status}</h3>
            <h3>{properties.species}</h3>
        </StyledCard>
    )
}