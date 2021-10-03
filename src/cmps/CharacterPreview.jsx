import React from "react";
import { Link } from 'react-router-dom'
export function CharacterPreview({ character }) {
  return (
    <div className="character-preview">
      {character.name}
      <ul>
      <Link to={'/character/' + character._id}>
          {character.classes.map(dndClass =>{
          return <li>level {dndClass.level} {dndClass.name}</li>
          })}
        <li>{character.race}</li>
        </Link>
      </ul>
    </div>
  );
}
