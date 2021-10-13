import React from "react";

export default function HealthAndStatus({ character }) {
  return (
    <div className="health-status-container">
      <div className="health">
        <p>HP</p>
        <span>
          {character.currentHitPoints}/{character.maxHitPoints}
        </span>
      </div>

      <div className="armor-class">
        <p>AC</p>
        <span>{character.armorClass}</span>
      </div>

      <div className="resist-immunities">
        <div className="resistances">
          <p>Resistances:</p>
          {character.defenses.resistances.map((resistance) => {
            return <span>{resistance}</span>;
          })}
        </div>
        <div className="immunities">
          <p>Immunities:</p>
          {character.defenses.immunities.map((immunity) => {
            return <span>{immunity}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
