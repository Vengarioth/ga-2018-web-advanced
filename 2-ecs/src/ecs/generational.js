import { Entity } from "./entity";

export class Generational {
    constructor() {
        this._entries = [];
        this._free = [];
    }

    allocate(chunkIndex, entityIndex) {
        if(this._free.length > 0) {
            const entry = this._free.pop();
            entry.isAlive = true;
            entry.chunkIndex = chunkIndex;
            entity.entityIndex = entityIndex;

            return new Entity(entry.id, entry.generation);
        } else {
            this._entries.push({
                isAlive: true,
                generation: 0,
                chunkIndex,
                entityIndex,
            });

            return new Entity(this._entries.length - 1, 0);
        }
    }

    free(entity) {
        const entry = this._entries[entity.getId()];
        entry.isAlive = false;
        entity.chunkIndex = -1;
        entity.entityIndex = -1;
        entry.generation += 1;
        this._free.push(entry);
    }

    isAlive(entity) {
        const entry = this._entries[entity.getId()];
        return entry.isAlive && entry.generation == entity.getGeneration();
    }

    getChunkIndex(entity) {
        const entry = this._entries[entity.getId()];
        return entry.chunkIndex;
    }

    getEntityIndex(entity) {
        const entry = this._entries[entity.getId()];
        return entry.entityIndex;
    }
}
