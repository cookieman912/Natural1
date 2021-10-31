import React, { useState } from "react";
import { charService } from "../Services/CharacterService";
export default function Skills({ character }) {
  const [skillsState, setSkills] = useState(character.skills);

  async function ProficiencyTick(skill) {
    skill.isProficient = !skill.isProficient;
    setSkills(
      skillsState.map((currSkill) => {
        if (currSkill.skillName === skill.skillName) {
          return skill;
        } else return currSkill;
      })
    );
    character.skills = skillsState;
    await charService.put(character);
  }
  function skillModifier(skill) {
    let value = character.abilityScores.find(
      (abilityScore) => abilityScore.name === skill.abilityScore
    );
  
    value = value.modifier;
    return value;
  }
  function skillValue(skill) {
    if (skill.isProficient)
      return <span> {skillModifier(skill) + character.proficiencyBonus}</span>;
    else return <span> {skillModifier(skill)}</span>;
  }

  function proficiencyCheck(skill) {
    if (skill.isProficient)
      return (
        <button onClick={() => ProficiencyTick(skill)} className="proficient">
          {" "}
        </button>
      );
    else
      return (
        <button
          onClick={() => ProficiencyTick(skill)}
          className="not-proficient"
        ></button>
      );
  }

  return (
    <div className="skills">
      <ul>
        {" "}
        <h2>Skills</h2>{" "}
        {skillsState.map((skill) => {
          return (
            <li key={skill.skillName}>
              <span>{skill.skillName}</span>
              <div>
              {skillValue(skill)}
              {proficiencyCheck(skill)}
              </div>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
}
