const ANNUAL_PRESENTS_ENABLED = false;

if (ANNUAL_PRESENTS_ENABLED) {
    let playersWhoAlreadyReceivedPresents = [];

    PlayerEvents.loggedIn(event => {
        if (event.player) {
            if (!playersWhoAlreadyReceivedPresents.includes(event.player.username)) {
                event.player.tell("Доброго дня! В честь річниці серверу ви отримуєте подарунки!");
                event.player.give(Item.of('minecraft:potion', {Potion:'long_water_breathing'}));
                event.player.give(Item.of('minecraft:potion', {Potion:'long_night_vision'}));
                event.player.give(Item.of('minecraft:potion', {Potion:'long_fire_resistance'}));
                event.player.give(Item.of('create_confectionery:caramel_glazed_berries', 64));
                playersWhoAlreadyReceivedPresents.push(event.player.username);
            }
        }
    });
}
