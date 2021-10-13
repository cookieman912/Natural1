import React from "react";
export default function CharGeneralInfo({ character }) {
  if (character.classes.length === 1)
    return (
      <div className="general-info">
        <header className="full-name">{character.name}</header>
        <ul>
          <li>
            <span className="overall-level">
              {" "}
              level {character.level} {character.classes[0].name}
            </span>
          </li>
          <li>Background: {character.background}</li>
          <li>Race: {character.race}</li>
        </ul>
      </div>
    );
  else
    return (
      <div className="general-info">
        <header className="full-name">{character.name}</header>
        <ul>
          <li>
            <span className="overall-level"> level {character.level}</span>
            <ul className="level-list">(
              {character.classes.map((dndClass) => {
                return (
                  <li> 
                    level {dndClass.level} {dndClass.name}
                  </li>
                );
              })}
            </ul>)
          </li>
          <li>Background: {character.background}</li>
          <li>Race: {character.race}</li>
        </ul>
      </div>
    );
}
