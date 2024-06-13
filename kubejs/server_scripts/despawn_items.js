const BATCH_SIZE = 8;
const MAX_BATCHES_COUNT = 32;

let rootBatch = { drops: [], nextBatch: null };
let lastBatch = rootBatch;
let currentBatchesCount = 1;

ItemEvents.dropped(event => {
    lastBatch.drops.push(event.item);
    if (lastBatch.drops.length >= BATCH_SIZE) {
        let newBatch = { drops: [], nextBatch: null };
        lastBatch.nextBatch = newBatch;
        lastBatch = newBatch;
        currentBatchesCount += 1;
    }
    if (currentBatchesCount > MAX_BATCHES_COUNT) {
        rootBatch.drops.forEach(item => item.count = 0);
        rootBatch = rootBatch.nextBatch;
        currentBatchesCount -= 1;
    }
});
