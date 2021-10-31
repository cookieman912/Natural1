import React, { useState } from "react";
import { charService } from "../Services/CharacterService";
import { useParams } from "react-router";

import CharGeneralInfo from "../cmps/CharGeneralInfo";
import AbilityScores from "../cmps/AbilityScores";
import HealthAndStatus from "../cmps/HealthAndStatus";
import SavingThrows from "../cmps/SavingThrows";
import Skills from "../cmps/Skills";
export default function CharacterDetails() {
  // console.log({character})
  const [character, setCharacter] = useState(null);
  const param = useParams();
  const id=param.id
  if (character!=null)
    return (
      <div className="character-sheet">
        <CharGeneralInfo character={character}/>
        <AbilityScores character={character}/>
        <HealthAndStatus character={character}/>
        <SavingThrows character={character}/>
        <Skills character={character}/>
      </div>
    );
  else {
   charService.getById(id)
    .then(char =>{setCharacter(char) });    
    return <div>loading...</div>;
  }
}
