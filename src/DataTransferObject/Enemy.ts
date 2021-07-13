import { EnemyInterface } from "../Interfaces/GeneralInterface";

export class EnemyEasy implements EnemyInterface{
    start(): string {
        return "Enemy Easy";
    }
}

export class EnemyMedium implements EnemyInterface {
    start(): string {
        return "Enemy Medium";
    }
}

export class EnemyHard implements EnemyInterface {
    start(): string {
        return "Enemy Hard";
    }
}