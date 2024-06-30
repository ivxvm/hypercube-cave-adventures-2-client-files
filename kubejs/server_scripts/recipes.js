ServerEvents.recipes(event => {
    event.remove({ id: 'balancedflight:sequenced_assembly/flight_anchor' });
    event.remove({ id: 'create:mechanical_crafting/ascended_flight_ring' });
    event.remove({ mod: 'createendertransmission' });
    event.remove({ id: 'createdeco:pressing/zinc_sheet' });

    event.replaceInput(
        { input: 'createdeco:zinc_sheet' },
        'createdeco:zinc_sheet',
        '#create:sheets/zinc'
    );

    event.replaceInput(
        { input: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        '#create:sheets/zinc'
    );
});
