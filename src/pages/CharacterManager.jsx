import React, { useState } from "react";
import { charService } from "../Services/CharacterService";
import { CharacterList } from "../cmps/CharacterList";

export default function CharacterManager() {
  const [characters, setcharacters] = useState(null);

  if (characters != null) {
    return (
      <main>
        list
        <CharacterList characters={characters} />
      </main>
    );
  } else {
    charService.query()
    .then(chars =>(setcharacters(chars)));
    return <main>loading...</main>;
  }
}
