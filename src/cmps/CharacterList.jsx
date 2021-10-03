import React from "react";
import { CharacterPreview } from "./CharacterPreview";
export function CharacterList({characters}) {
    console.log(characters)
  return (
    <div>
      <h1> hey im the list</h1>
      <ul>
   { characters.map(character =>{return <li key={character._id}><CharacterPreview character={character} /> </li>})}
   </ul>
    </div>
  );
}
