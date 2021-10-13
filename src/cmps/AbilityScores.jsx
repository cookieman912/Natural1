import React from "react";

export default function AbilityScores({ character }) {
  return (
    <div className="ability-score-container">
      <ul className="ability-score-list">
        {character.abilityScores.map((abilityScore) => {
          return (
            <li>
              <div className="value-container">
                <p>{abilityScore.modifier}</p>
                <p>{abilityScore.score}</p>
              </div>
              <p>{abilityScore.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
