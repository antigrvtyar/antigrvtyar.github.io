import * as THREE from '../../../build/three.module.js';
// import * as CANNON from 'cannon';

export default class Bricks {
    constructor(scene, world) {
        this.scene = scene;
        this.world = world;
        this.bricks = [];
        this.init();
    }
    init() {
        this.updatePhysics();
        
        // Bricks 1
        for(let i = -2 ; i < 0 ; i++) 
            for(let j = 0 ; j < 3 ; j++){
                this.createBricks(
                    new THREE.Vector3(2 * i, 1.4 * j, -20),
                    new THREE.Vector3(2, 1.4, 1.6)
                )
            }

        // Bricks 2
        for(let i = -2 ; i < 0 ; i++) 
            for(let j = 0 ; j < 3 ; j++){
                this.createBricks(
                    new THREE.Vector3(30 * i, 1.4 * j, 20),
                    new THREE.Vector3(2, 1.4, 1.6)
                )
            }
        
        for(let i = -2 ; i < 0 ; i++) 
            for(let j = 0 ; j < 3 ; j++){
                this.createBricks(
                    new THREE.Vector3(35 * i, 1.4 * j, -30),
                    new THREE.Vector3(2, 1.4, 1.6)
                )
            }

        for(let i = -2 ; i < 1 ; i++) 
            for(let j = 0 ; j < 2 ; j++){
                this.createBricks(
                    new THREE.Vector3(25 * i, 1.4 * j, -80),
                    new THREE.Vector3(2, 1.4, 1.6)
                )
            }

        for(let i = -2 ; i < 0 ; i++) 
            for(let j = 0 ; j < 4 ; j++){
                this.createBricks(
                    new THREE.Vector3(-45 * i, 1.4 * j, -86),
                    new THREE.Vector3(2, 1.4, 1.6)
                )
            }

        // Bricks 3
        for(let i = -2 ; i < 0 ; i++) 
            for(let j = 0 ; j < 3 ; j++){
                this.createBricks(
                    new THREE.Vector3(-24 * i, 1.4 * j, 50),
                    new THREE.Vector3(2, 1.4, 1.6)
                )
            }
        for(let i = -2 ; i < 0 ; i++) 
            for(let j = 0 ; j < 3 ; j++){
                this.createBricks(
                    new THREE.Vector3(-44 * i, 1.4 * j, -50),
                    new THREE.Vector3(2, 1.4, 1.6)
                )
            }
        for(let i = -2 ; i < 0 ; i++) 
            for(let j = 0 ; j < 3 ; j++){
                this.createBricks(
                    new THREE.Vector3(-44 * i, 1.4 * j, -10),
                    new THREE.Vector3(2, 1.4, 1.6)
                )
            }
    }
    createBricks(position, dimension) {
        const brickGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
        const brickMaterial = new THREE.MeshStandardMaterial({color: 0xD1091E});
        const brick = new THREE.Mesh(brickGeometry, brickMaterial);
        brick.castShadow = true;
        brick.scale.copy(dimension);
        brick.position.copy(position);
        this.scene.add(brick);

        const brickShape = new CANNON.Box(new CANNON.Vec3(dimension.x * 0.5, dimension.y * 0.5, dimension.z * 0.5));
        const brickBody = new CANNON.Body({
            mass: 1,
            position,
            shape: brickShape
        });
        brickBody.sleepSpeedLimit = 1.0;

        this.world.addBody(brickBody);

        brick.cannonBody = brickBody

        this.bricks.push(brick)
    }
    updatePhysics() {
        const update = () => {
            if(this.bricks) {
                for(const obj of this.bricks) {
                    obj.position.copy(obj.cannonBody.position);
                    obj.quaternion.copy(obj.cannonBody.quaternion);
                }
            }
        }
        this.world.addEventListener('postStep', update);
    }
}