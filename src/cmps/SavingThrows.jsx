import React, { useState } from "react";

export default function SavingThrows({ character }) {
  const [savingThrowState, setSavingThrow] = useState(character.savingThrows);

  function ProficiencyTick(savingThrow) {
    savingThrow.isProficient = !savingThrow.isProficient;
    setSavingThrow(
      savingThrowState.map((currSaveThrow) => {
        if (currSaveThrow.name === savingThrow.name) return savingThrow;
        else return currSaveThrow;
      })
    );
  }

  function savingThrowValue(savingThrow) {
    if (savingThrow.isProficient)
      return <span> {savingThrow.modifier + character.proficiencyBonus}</span>;
    else return <span> {savingThrow.modifier}</span>;
  }

  function proficiencyCheck(savingThrow) {
    if (savingThrow.isProficient)
      return (
        <button
          onClick={() => ProficiencyTick(savingThrow)}
          className="proficient"
        >
          {" "}
        </button>
      );
    else
      return (
        <button
          onClick={() => ProficiencyTick(savingThrow)}
          className="not-proficient"
        ></button>
      );
  }

  return (
    <div className="saving-throws">
      <ul>
        {character.savingThrows.map((savingThrow) => {
          return (
            <li key={savingThrow.name}>
              <span>{savingThrow.name}</span>
              {savingThrowValue(savingThrow)}
              <span>{savingThrow.isProficient}</span>
              {proficiencyCheck(savingThrow)}
            </li>
          );
        })}
          <h2>Saving Throws</h2> </ul>{" "}
    </div>
  );
}
