import * as THREE from '../../../build/three.module.js';
// import * as CANNON from 'cannon'
import { GLTFLoader } from '../../../js/jsm/loaders/GLTFLoader.js'
import JoyStick from '../../libs/joystick.js';

const carData = [
    {
        body : {
            assets : './assets/models/Sport/body.glb',
            scale : 2,
        },
        wheel : {
            assets : './assets/models/SUV/wheel.glb',
            scale : 2.3,
        }
    },
    {
        body : {
            assets : './assets/models/SUV/body.glb',
            scale : 2,
        },
        wheel : {
            assets : './assets/models/SUV/wheel.glb',
            scale : 2,
        }
    },
];

const maxSteerVal = 0.5;
const maxForce = 370;
const brakeForce = 15;
const keysPressed = [];

export default class Car {
    constructor(scene, world, gltfLoader, carConfirm) {
        this.scene = scene;
        this.world = world;
        this.gltfLoader = gltfLoader;
        this.carConfirm = carConfirm;

        this.vehicle = {};
        this.chassis = {};
        this.shadow;
        this.init();
    }

    init() {
        this.setup();
        this.controls();
    }

    flagging(){
        console.log("Mobil hit trigger")
    }

    resetCarHitTrigger(){
        this.vehicle.applyEngineForce(maxForce * -2, 0);
        this.vehicle.applyEngineForce(maxForce * -2, 1);
        this.vehicle.applyEngineForce(maxForce * -2, 2);
        this.vehicle.applyEngineForce(maxForce * -2, 3);

        // this.vehicle.setBrake(brakeForce * 1.4, 0);
        // this.vehicle.setBrake(brakeForce * 1.4, 1);
        // this.vehicle.setBrake(brakeForce * 1.4, 2);
        // this.vehicle.setBrake(brakeForce * 1.4, 3);

        
    }

    setup() {   
        const gltfLoader = new GLTFLoader();

        const chassisDimensions = new CANNON.Vec3(1.35, 0.7, 3.05);
        const chassisShape = new CANNON.Box(chassisDimensions);
        const groundMaterial = new CANNON.Material("groundMaterial");
        const wheelMaterial = new CANNON.Material("wheelMaterial");
        groundMaterial.friction = 0;
        const chassisBody = new CANNON.Body({ mass: 180, material: groundMaterial });
        
        const helpChassisGeo = new THREE.BoxBufferGeometry(chassisDimensions.x * 2, chassisDimensions.y * 2, chassisDimensions.z * 2);
        const helpChassisMat = new THREE.MeshStandardMaterial({color: 0xff0000, wireframe: true});
        const helpChassis = new THREE.Mesh(helpChassisGeo, helpChassisMat);
        // this.scene.add(helpChassis);

        chassisBody.position.set(0, 4, 0);
        chassisBody.angularVelocity.set(0, 0, 0);
        chassisBody.addShape(chassisShape);

        this.gltfLoader.load(carData[this.carConfirm].body.assets, gltf => {
            this.chassis = gltf.scene;
            this.chassis.scale.set(carData[this.carConfirm].body.scale, carData[this.carConfirm].body.scale, carData[this.carConfirm].body.scale);

            this.chassis.traverse( function ( child ) {

                if(child.name == 'sport_car_fix_1'){
                    child.material.roughness = 1
                    child.material.metalness = 0
                    child.castShadow = true;
                }
                if(child.name == 'sport_car_fix_2'){
                    child.material.roughness = 1
                    child.material.metalness = 0
                }
                if(child.name == 'sport_car_fix_3'){
                    child.material.roughness = .1
                    child.material.metalness = 0.5
                }

                if(child.name == 'Body_2'){
                    child.material.roughness = .6
                    child.material.metalness = .1
                    child.castShadow = true;
                }
            });

            this.scene.add(this.chassis);
        });
        
        const options = {
            radius: 0.5,
            directionLocal: new CANNON.Vec3(0, -1, 0),
            suspensionStiffness: 55,
            suspensionRestLength: 0.5,
            frictionSlip: 30,
            dampingRelaxation: 2.3,
            dampingCompression: 4.3,
            maxSuspensionForce: 500000,
            rollInfluence:  0.01,
            axleLocal: new CANNON.Vec3(-1, 0, 0),
            chassisConnectionPointLocal: new CANNON.Vec3(1, 0.5, 0),
            maxSuspensionTravel: 1,
            customSlidingRotationalSpeed: 30,
        };
        
        // Create the vehicle
        this.vehicle = new CANNON.RaycastVehicle({
            chassisBody: chassisBody,
            indexRightAxis: 0,
            indexUpAxis: 1,
            indexForwardAxis: 2
        });
        
        let wheelX, wheelY, wheelZ;
        if(this.carConfirm == 0){
            wheelX = 1.2;
            wheelY = 0;
            wheelZ = 1.9;

        }else if(this.carConfirm == 1){
            wheelX = 1.1;
            wheelY = 0;
            wheelZ = 1.9;
        }
        options.chassisConnectionPointLocal.set(wheelX, wheelY, -wheelZ);
        this.vehicle.addWheel(options);
        
        options.chassisConnectionPointLocal.set(-wheelX, wheelY, -wheelZ);
        this.vehicle.addWheel(options);
        
        options.chassisConnectionPointLocal.set(wheelX, wheelY, wheelZ);
        this.vehicle.addWheel(options);
        
        options.chassisConnectionPointLocal.set(-wheelX, wheelY, wheelZ);
        this.vehicle.addWheel(options);
        
        this.vehicle.addToWorld(this.world);
        
        const wheelBodies = [];
        this.vehicle.wheelInfos.forEach( function(wheel){
            const cylinderShape = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20);
            const wheelBody = new CANNON.Body({ mass: 1, material: wheelMaterial });
            const q = new CANNON.Quaternion();
            q.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI / 2);
            wheelBody.addShape(cylinderShape, new CANNON.Vec3(), q);
            wheelBodies.push(wheelBody);
        });
        const wheels = [];
        for(let i = 0 ; i < 4 ; i++) {
            this.gltfLoader.load(carData[this.carConfirm].wheel.assets, (gltf) => {
                const model = gltf.scene;
                model.scale.set(carData[this.carConfirm].wheel.scale, carData[this.carConfirm].wheel.scale, carData[this.carConfirm].wheel.scale)

                model.traverse( function ( child ) {

                    if(child.name == 'ban_s_3'){
                        child.material.roughness = .9
                        child.material.metalness = .24
                    }
                });


                this.scene.add(model);
                wheels.push(model);

                for(let j in model.children[0].children[0].children) {
                    model.children[0].children[0].children[j].castShadow = true;
                }
            })
        }
        
        // Update wheels
        const updateWheels = () => {
            if(this.chassis?.position && this.vehicle?.chassisBody?.position) {
                if(wheels[0]) {
                    for(let i = 0 ; i < 4 ; i++) {
                        this.vehicle.updateWheelTransform(i);
                        wheels[i].position.copy(this.vehicle.wheelInfos[i].worldTransform.position);
                        wheels[i].quaternion.copy(this.vehicle.wheelInfos[i].worldTransform.quaternion);
                    }
                    this.chassis.position.copy(this.vehicle.chassisBody.position)
                    this.chassis.quaternion.copy(this.vehicle.chassisBody.quaternion)
                    helpChassis.position.copy(this.vehicle.chassisBody.position)
                    helpChassis.quaternion.copy(this.vehicle.chassisBody.quaternion)
                }
            }
        }
        this.world.addEventListener('postStep', updateWheels);
    }
    

    controls() {

        // WASD
        window.addEventListener('keydown', (e) => {
            if(e.key === 'r') resetCar();
            if(!keysPressed.includes(e.keyCode)) keysPressed.push(e.keyCode); 
            hindMovement();
        });
        window.addEventListener('keyup', (e) => {keysPressed.splice(keysPressed.indexOf(e.keyCode), 1); hindMovement();});

        const hindMovement = () => {
            
            if(!keysPressed.includes(32)){
                this.vehicle.setBrake(0, 0);
                this.vehicle.setBrake(0, 1);
                this.vehicle.setBrake(0, 2);
                this.vehicle.setBrake(0, 3);
                if(keysPressed.includes(65) || keysPressed.includes(37)) {
                    this.vehicle.setSteeringValue(maxSteerVal * 1, 0);
                    this.vehicle.setSteeringValue(maxSteerVal * 1, 1);
                }
                else if(keysPressed.includes(68) || keysPressed.includes(39)) {
                    this.vehicle.setSteeringValue(maxSteerVal * -1, 0);
                    this.vehicle.setSteeringValue(maxSteerVal * -1, 1);
                } 
                else stopSteer();
                
                if(keysPressed.includes(83) || keysPressed.includes(40)) {
                    this.vehicle.applyEngineForce(maxForce * -1, 0);
                    this.vehicle.applyEngineForce(maxForce * -1, 1);
                    this.vehicle.applyEngineForce(maxForce * -1, 2);
                    this.vehicle.applyEngineForce(maxForce * -1, 3);
                }
                else if(keysPressed.includes(87) || keysPressed.includes(38)) {
                    this.vehicle.applyEngineForce(maxForce * 1, 0);
                    this.vehicle.applyEngineForce(maxForce * 1, 1);
                    this.vehicle.applyEngineForce(maxForce * 1, 2);
                    this.vehicle.applyEngineForce(maxForce * 1, 3);
                } 
                else stopCar();
            }
            else
                brake();
        }

        const resetCar = () => {
            this.vehicle.chassisBody.position.y = 4;
            this.vehicle.chassisBody.quaternion.copy(this.vehicle.chassisBody.initQuaternion);
            this.vehicle.chassisBody.velocity.copy(this.vehicle.chassisBody.initVelocity);
            this.vehicle.chassisBody.angularVelocity.copy(this.vehicle.chassisBody.initAngularVelocity);
        }

        const brake = () => {    
            this.vehicle.setBrake(brakeForce * 2.4, 0);
            this.vehicle.setBrake(brakeForce * 2.4, 1);
            this.vehicle.setBrake(brakeForce * 2.4, 2);
            this.vehicle.setBrake(brakeForce * 2.4, 3);
        }

        const stopCar = () => {
            this.vehicle.setBrake(brakeForce * 1.4, 0);
            this.vehicle.setBrake(brakeForce * 1.4, 1);
            this.vehicle.setBrake(brakeForce * 1.4, 2);
            this.vehicle.setBrake(brakeForce * 1.4, 3);
        }

        const stopSteer = () => {
            this.vehicle.setSteeringValue(0, 0);
            this.vehicle.setSteeringValue(0, 1);
        }

        // Joystick
        const joystickMove = ( forward, turn ) => {          
            const force = maxForce * forward;
            const steer = maxSteerVal * -turn;
          
            if (forward!=0){
              this.vehicle.setBrake(0, 0);
              this.vehicle.setBrake(0, 1);
              this.vehicle.setBrake(0, 2);
              this.vehicle.setBrake(0, 3);
          
              this.vehicle.applyEngineForce(force, 0);
              this.vehicle.applyEngineForce(force, 1);
              this.vehicle.applyEngineForce(force, 2);
              this.vehicle.applyEngineForce(force, 3);
            }else{
              this.vehicle.setBrake(brakeForce * 1.4, 0);
              this.vehicle.setBrake(brakeForce * 1.4, 1);
              this.vehicle.setBrake(brakeForce * 1.4, 2);
              this.vehicle.setBrake(brakeForce * 1.4, 3);
            }
          
            this.vehicle.setSteeringValue(steer, 0);
            this.vehicle.setSteeringValue(steer, 1); 
        }
        
        const joystick = new JoyStick({
            game: this,
            onMove: joystickMove
        });

        // JoyStick move ^^^
    }
}