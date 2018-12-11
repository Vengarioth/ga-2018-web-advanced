import { Entity } from "./entity";

export class Chunk {
    constructor(sizeInBytes, archetype) {
        this._sizeInBytes = sizeInBytes;
        this._archetype = archetype;
        this._maxEntityCount = Math.floor(sizeInBytes / archetype.getSizePerEntity());
        this._buffer = new SharedArrayBuffer(sizeInBytes);
        this._views = [];

        this._bumpPointer = 0;

        let offset = 0;
        for(let i = 0; i < this._archetype.getComponentCount(); i++) {
            const component = this._archetype.getComponent(i);

            const stride = component.getComponentSize();
            const length = this._maxEntityCount * stride;
            const arrayType = component.getElementArrayType();

            this._views.push({
                offset,
                stride,
                array: new arrayType(this._buffer, offset, this._maxEntityCount),
            });

            offset += length;
        }
    }

    createEntity() {
        if(this._bumpPointer >= this._maxEntityCount + 1) {
            throw new Error(`Cannot create new entity: chunk is full.`);
        }

        return this._bumpPointer++;
    }

    removeEntity(index) {
        this._bumpPointer--;

        // return if removed from end of list (or last element)
        if(this._bumpPointer === index) {
            return null;
        }

        // otherwise move the last entity into the created hole and return information what moved where

        const from = this._bumpPointer;
        const to = index;

        for(let i = 0; i < this._views.length; i++) {
            const view = this._views[i];

            view.array[to] = view.array[from];
        }

        return { from, to };
    }
}
