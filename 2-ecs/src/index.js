import { Archetype, Component, World } from './ecs';

const boids = new Archetype([
    Component.float2('position'),
    Component.float2('acceleration'),
    Component.float2('velocity')
]);

const world = new World();

for(let i = 0; i < 1000; i++) {
    const id = world.createEntity(boids);

    const x = (Math.random() * 200) - 100;
    const y = (Math.random() * 200) - 100;

    world.setComponentData(id, 'position', [x, y]);
    world.setComponentData(id, 'acceleration', [0, 0]);
    world.setComponentData(id, 'velocity', [0, 0]);
}

world.schedule(['position', 'acceleration', 'velocity'], (position, acceleration, velocity) => {

    position[0] += velocity[0];
    position[1] += velocity[1];

    velocity[0] *= acceleration[0];
    velocity[1] *= acceleration[1];

    return [position, acceleration, velocity];
});
