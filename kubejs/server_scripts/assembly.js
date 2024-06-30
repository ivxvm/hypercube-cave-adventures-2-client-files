ServerEvents.recipes(event => {
    let t = 'droid_create_diamond_recipe:impure_diamond_chunk';
    event.recipes.create.sequenced_assembly([
        'droid_create_diamond_recipe:diamond_chunk',
    ], 'droid_create_diamond_recipe:haunted_scorial_coal', [
        event.recipes.create.deploying(t, [t, 'create:experience_nugget']),
        event.recipes.create.cutting(t, t).processingTime(50),
        event.recipes.create.deploying(t, [t, '#forge:sand']),
        event.recipes.create.pressing(t, t),
    ]).transitionalItem(t).loops(2);
});
