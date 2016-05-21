import React, { Component, PropTypes, } from 'react';
import React3 from 'react-three-renderer';
import { Vector3, Euler, Geometry, DoubleSide, } from 'three';

// It's easy to create game entitites as react components, like this one!
import Robot from './Robot';

/**
 * Our main class to display the game. This contains only view code! It's very
 * easy to reason about
 */
export default class Game extends Component {
    
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        cameraPosition: PropTypes.instanceOf( Vector3 ).isRequired,
        lookAt: PropTypes.instanceOf( Vector3 ).isRequired,
        geometry: PropTypes.instanceOf( Geometry ).isRequired,
        robotPosition: PropTypes.instanceOf( Vector3 ).isRequired,
        robotRotation: PropTypes.instanceOf( Euler ).isRequired,
    }

    render() {
        
        const {
            width, height, cameraPosition, geometry, lookAt, robotPosition,
            robotRotation 
        } = this.props;
        
        const { faces, vertices, faceVertexUvs, } = geometry;
        
        return <React3
            mainCamera="camera"
            width={ width }
            height={ height }
            antialias
        >
            <resources>
                <texture
                    resourceId="robotImage" 
                    url={ require( '../../assets/sitepoint-robot-texture.jpg' ) }
                    anisotropy={ 16 }
                />
                <meshPhongMaterial
                    resourceId="robotTexture"
                    side={ DoubleSide }
                >
                    <textureResource
                        resourceId="robotImage"
                    />
                </meshPhongMaterial>
                <geometry
                    resourceId="robotGeometry"
                    faces={ faces }
                    vertices={ vertices }
                    faceVertexUvs={ faceVertexUvs }
                />
            </resources>
            <scene>
                <perspectiveCamera
                    name="camera"
                    fov={ 75 }
                    aspect={ width / height }
                    near={ 0.1 }
                    far={ 1000 }
                    position={ cameraPosition }
                    lookAt={ lookAt }
                />
                <ambientLight
                    color={ 0xdddddd }
                />
                <Robot
                    position={ robotPosition }
                    rotation={ robotRotation }
                />
            </scene>
        </React3>;
        
    }

}