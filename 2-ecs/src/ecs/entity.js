export class Entity {
    constructor(id, generation) {
        this._id = id;
        this._generation = generation;
    }

    getId() {
        return this._id;
    }

    getGeneration() {
        return this._generation;
    }
}
