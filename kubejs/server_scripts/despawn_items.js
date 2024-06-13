const MAX_DROPS = 256;
const DESPAWN_TIMEOUT = 1024;

let tickCounter = 0;

LevelEvents.tick(event => {
    tickCounter -= 1;
    if (tickCounter > 0) return;
    tickCounter = DESPAWN_TIMEOUT;
    let drops = event.level.getEntities()
        .filter(entity => entity.type === "minecraft:item");
    if (drops.length > MAX_DROPS) {
        drops.sort((a, b) => b.age - a.age);
        let n = drops.length - MAX_DROPS;
        for (let i = 0; i < n; i++) {
            drops[i].discard();
        }
    }
});
