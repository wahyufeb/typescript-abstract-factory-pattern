import Game from "./DataTransferObject/Game";

import { GameFactoryEasy, GameFactoryHard, GameFactoryMedium } from "./AbstractFactory/GameFactory";

const gameEasy = new Game(new GameFactoryEasy());
const gameMedium = new Game(new GameFactoryMedium());
const gameHard = new Game(new GameFactoryHard());

console.log("=== Game ===");
console.log({
    gameEasy: gameEasy.start(),
    gameMedium: gameMedium.start(),
    gameHard: gameHard.start(),
});
console.log("============");
