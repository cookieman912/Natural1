
import { storageService } from './async-storage.service.js'

const CHAR_KEY = "charDB";
let defaultCharacters = storageService.query(CHAR_KEY).then(characters => {
    console.log('characters', characters)
    defaultCharacters = characters;
    if (defaultCharacters.length === 0 || !defaultCharacters) {
        defaultCharacters = require('../Jsons/Character.json')
        storageService.postMany(CHAR_KEY, defaultCharacters)
    }
})



export const charService = {
    query,
    getById,
    put,
}

function query() {

    return storageService.query(CHAR_KEY);
}

function getById(id) {
    console.log(id)
    return storageService.get(CHAR_KEY, id)
}

function put(character){
    storageService.put(CHAR_KEY,character)
}
