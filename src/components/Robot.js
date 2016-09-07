import React, { Component, PropTypes, } from 'react';
import React3 from 'react-three-renderer';
import { Euler, Vector3, } from 'three';

/**
 * The component representing the robot / main player. We can implement it as
 * functional stateless component because it's so simple
 **/
const Robot = ({ position, rotation }) => <group
    position={ position }
    rotation={ rotation }
>
    <mesh>
        <geometryResource
            resourceId="robotGeometry"
        />
        <materialResource
            resourceId="robotTexture"
        />
    </mesh>
</group>;

Robot.propTypes = {
    position: PropTypes.instanceOf( Vector3 ).isRequired,
    rotation: PropTypes.instanceOf( Euler ).isRequired,
}

export default Robot;
