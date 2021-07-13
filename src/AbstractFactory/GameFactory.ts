import { ArenaInterface, GameFactoryInterface, LevelInterface, EnemyInterface } from "../Interfaces/GeneralInterface";
import { LevelEasy, LevelHard, LevelMedium } from "../DataTransferObject/Level";
import { ArenaEasy, ArenaHard, ArenaMedium } from "../DataTransferObject/Arena";
import { EnemyEasy, EnemyHard, EnemyMedium} from "../DataTransferObject/Enemy";

export class GameFactoryEasy implements GameFactoryInterface {
    createLevel(): LevelInterface {
        return new LevelEasy();
    }

    createArena(): ArenaInterface {
        return new ArenaEasy();
    }

    createEnemy(): EnemyInterface {
        return new EnemyEasy();
    }
}

export class GameFactoryMedium implements GameFactoryInterface {
    createLevel(): LevelInterface {
        return new LevelMedium();
    }

    createArena(): ArenaInterface {
        return new ArenaMedium();
    }

    createEnemy(): EnemyInterface {
        return new EnemyMedium();
    }
}

export class GameFactoryHard implements GameFactoryInterface {
    createLevel(): LevelInterface {
        return new LevelHard();
    }

    createArena(): ArenaInterface {
        return new ArenaHard();
    }

    createEnemy(): EnemyInterface {
        return new EnemyHard();
    }
}