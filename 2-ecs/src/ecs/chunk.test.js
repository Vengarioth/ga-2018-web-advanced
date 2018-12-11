import { Archetype } from './archetype';
import { Chunk } from './chunk';
import { Component } from './component';

test('it works', () => {
    const position = Component.float2('position');
    const health = Component.int('health');
    const archetype = new Archetype([position, health]);
    const chunk = new Chunk(24, archetype);
});
