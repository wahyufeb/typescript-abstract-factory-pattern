import { ArenaInterface } from "../Interfaces/GeneralInterface";

export class ArenaEasy implements ArenaInterface{
    start(): string {
        return "Arena Easy";
    }
}

export class ArenaMedium implements ArenaInterface {
    start(): string {
        return "Arena Medium";
    }
}

export class ArenaHard implements ArenaInterface {
    start(): string {
        return "Arena Hard";
    }
}