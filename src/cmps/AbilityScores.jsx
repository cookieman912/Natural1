import React from "react";

export default function AbilityScores({ character }) {
  return (
    <div className="ability-score-container">
      <ul className="ability-score-list">
        {character.abilityScores.map((abilityScore) => {
          return (
            <li>
              <p>{abilityScore.modifier}</p>
              <p>{abilityScore.value}</p>
              <p>{abilityScore.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
