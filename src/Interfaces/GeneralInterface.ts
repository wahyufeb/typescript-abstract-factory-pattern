export interface LevelInterface {
    start(): string
}

export interface ArenaInterface {
    start(): string
}

export interface EnemyInterface {
    start(): string
}

export interface GameFactoryInterface {
    createLevel(): LevelInterface;
    createArena(): ArenaInterface;
    createEnemy(): EnemyInterface;
}