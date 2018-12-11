export class Component {
    constructor(name, type, elementSize, elementCount) {
        this._name = name;
        this._type = type;
        this._elementSize = elementSize;
        this._elementCount = elementCount;
    }

    getElementArrayType() {
        return this._type;
    }

    getComponentSize() {
        return this._elementSize * this._elementCount;
    }

    static byte(name) {
        return new Component(name, Int8Array, Int8Array.BYTES_PER_ELEMENT, 1);
    }

    static byte2(name) {
        return new Component(name, Int8Array, Int8Array.BYTES_PER_ELEMENT, 2);
    }

    static byte3(name) {
        return new Component(name, Int8Array, Int8Array.BYTES_PER_ELEMENT, 3);
    }

    static float(name) {
        return new Component(name, Float32Array, Float32Array.BYTES_PER_ELEMENT, 1);
    }
    
    static float2(name) {
        return new Component(name, Float32Array, Float32Array.BYTES_PER_ELEMENT, 2);
    }
    
    static float3(name) {
        return new Component(name, Float32Array, Int32Array.BYTES_PER_ELEMENT, 3);
    }
    
    static int(name) {
        return new Component(name, Int32Array, Int32Array.BYTES_PER_ELEMENT, 1);
    }
    
    static int2(name) {
        return new Component(name, Int32Array, Int32Array.BYTES_PER_ELEMENT, 2);
    }
    
    static int3(name) {
        return new Component(name, Int32Array, Int32Array.BYTES_PER_ELEMENT, 3);
    }
}
