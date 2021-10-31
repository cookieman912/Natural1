import React, { useState } from "react";
import { charService } from "../Services/CharacterService";
export default function SavingThrows({ character }) {
  const [savingThrowState, setSavingThrow] = useState(character.savingThrows);

  async function ProficiencyTick(savingThrow) {
    savingThrow.isProficient = !savingThrow.isProficient;
    console.log(savingThrow.isProficient);
    console.log(savingThrowState);
    setSavingThrow(
      savingThrowState.map((currSaveThrow) => {
        if (currSaveThrow.name === savingThrow.name) {
          console.log("in changed throw",savingThrow);
          return savingThrow;
        } else return currSaveThrow;
      })
    );
    console.log(savingThrowState);
    character.savingThrows = savingThrowState;
   await charService.put(character);
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
        {" "}
        <h2>Saving Throws</h2>{" "}
        {savingThrowState.map((savingThrow) => {
          return (
            <li key={savingThrow.name}>
              <span>{savingThrow.name}</span>
              {savingThrowValue(savingThrow)}
              <span>{savingThrow.isProficient}</span>
              {proficiencyCheck(savingThrow)}
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
}
