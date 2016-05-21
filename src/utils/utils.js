import { JSONLoader, TextureLoader } from 'three';

const jsonLoader = new JSONLoader();
const textureLoader = new TextureLoader();

export function loadModel( path ) {
    return new Promise( ( resolve, reject ) => {
        jsonLoader.load(
            path,
            resolve,
            () => null,
            error => reject
        );
    });
}

export function loadTexture( path ) {
    return new Promise( ( resolve, reject ) => {
        textureLoader.load(
            path,
            resolve,
            () => null,
            reject
        );
    });
}