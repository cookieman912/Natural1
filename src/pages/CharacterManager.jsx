import React, { useState } from "react";
import { charService } from "../Services/CharacterService";
import {CharacterList} from "../cmps/CharacterList"

export default function CharacterManager() {
  const characters = charService.query();

  return (
    <main>
      
       <CharacterList characters={characters}/>
    </main>
  );
}
