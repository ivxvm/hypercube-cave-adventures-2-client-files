ServerEvents.recipes(event => {
    event.remove({ id: 'balancedflight:sequenced_assembly/flight_anchor' });
    event.remove({ id: 'create:mechanical_crafting/ascended_flight_ring' });
    event.remove({ mod: 'createendertransmission' });
});
