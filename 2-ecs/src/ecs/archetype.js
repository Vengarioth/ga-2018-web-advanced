export class Archetype {
    constructor(components) {
        this._components = components;
    }

    getComponentCount() {
        return this._components.length;
    }

    getComponent(index) {
        return this._components[index];
    }

    getSizePerEntity() {
        return this._components.reduce((a, c) => a + c.getComponentSize(), 0);
    }
}
