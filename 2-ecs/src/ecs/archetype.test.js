import { Component } from './component';
import { Archetype } from './archetype';

test('it works', () => {
    const position = Component.float2('position');
    const health = Component.int('health');
    const archetype = new Archetype([position, health]);

    expect(archetype.getSizePerEntity()).toEqual(12);
});
