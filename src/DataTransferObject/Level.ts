import { LevelInterface } from "../Interfaces/GeneralInterface";

export class LevelEasy implements LevelInterface{
    start(): string {
        return "Level Easy";
    }
}

export class LevelMedium implements LevelInterface {
    start(): string {
        return "Level Medium";
    }
}

export class LevelHard implements LevelInterface {
    start(): string {
        return "Level Hard";
    }
}