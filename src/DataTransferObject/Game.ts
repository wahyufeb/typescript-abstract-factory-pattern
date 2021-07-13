import {LevelInterface, ArenaInterface, GameFactoryInterface, EnemyInterface} from "../Interfaces/GeneralInterface";

class Game {
    private level: LevelInterface;
    private arena: ArenaInterface;
    private enemy: EnemyInterface;

    constructor(gameFactory: GameFactoryInterface) {
        this.level = gameFactory.createLevel();
        this.arena = gameFactory.createArena();
        this.enemy = gameFactory.createEnemy();
    }

    public start() {
        // this.level.start()
        // this.arena.start()
        // this.enemy.start()
        return {
            level: this.level.start(),
            arena: this.arena.start(),
            enemy: this.enemy.start(),
        }
    }
}

export default Game;