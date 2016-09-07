import THREE, { Vector3, Euler, } from 'three';

const positionScale = 0.5;
const positionSpeed = 0.001;
const positionOffset = 0.2;

const rotationSpeed = 0.002;
const rotationScale = 0.03;

/**
 * We can manage our game state in a series of small, easy to reason about
 * functions
 **/
export default function robotMovementReudcer( oldState, time ) {
    
    // Merge the old state with the updated properties
    return {
        ...oldState,
        robotPosition: new Vector3( 0, 0, positionScale * Math.sin( time * positionSpeed ) + positionOffset ),
        robotRotation: new Euler( 0, 0, rotationScale * Math.sin( time * rotationSpeed ) )
    };
    
}
