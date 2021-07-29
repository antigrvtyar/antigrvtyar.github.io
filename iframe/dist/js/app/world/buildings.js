import * as THREE from '../../../build/three.module.js';
import { GLTFLoader } from '../../../js/jsm/loaders/GLTFLoader.js'

const objectBuilding = [
    {
        assets : './assets/models/career/b11.glb',
        scale : 1.5,
        position : {
            x : 80,
            y : 0,
            z : 23
        },
        building : {
            dimension : {
                x : 4,
                y : 10,
                z : 8
            },
        }
    },
    {
        assets : './assets/models/career/b11.glb',
        scale : 1.5,
        position : {
            x : 20,
            y : 0,
            z : -5
        },
        building : {
            dimension : {
                x : 4,
                y : 10,
                z : 8
            },
        }
    },
    {
        assets : './assets/models/career/b10.glb',
        scale : 0.17,
        position : {
            x : 90,
            y : 0,
            z : 70
        },
        building : {
            dimension : {
                x : 2,
                y : 10,
                z : 2
            }
        }
    },
    {
        assets : './assets/models/career/b10.glb',
        scale : 0.17,
        position : {
            x : -67,
            y : 0,
            z : 60
        },
        building : {
            dimension : {
                x : 2,
                y : 10,
                z : 2
            }
        }
    },
    {
        assets : './assets/models/career/b10.glb',
        scale : 0.17,
        position : {
            x : 67,
            y : 0,
            z : -60
        },
        building : {
            dimension : {
                x : 2,
                y : 10,
                z : 2
            }
        }
    },
    {
        assets : './assets/models/career/b9.glb',
        scale : 1.5,
        position : {
            x : 23,
            y : 0,
            z : -68 
        },
        building : {
            dimension : {
                x : 10.1,
                y : 10,
                z : 3.2
            }
        }
    },
    {
        assets : './assets/models/career/b8.glb',
        scale : .35,
        position : {
            x : -25,
            y : 0,
            z : 35
        },
        building : {
            dimension : {
                x : 5,
                y : 10,
                z : 5
            }
        }
    },
    {
        assets : './assets/models/career/b7.glb',
        scale : .4,
        position : {
            x : 75,
            y : 0,
            z : -35
        },
        building : {
            dimension : {
                x : 10,
                y : 10,
                z : 8
            },
        }
    },
    {
        assets : './assets/models/career/b6.glb',
        scale : 1,
        position : {
            x : -48,
            y : 0,
            z : -25
        },
        building : {
            dimension : {
                x : 15,
                y : 10,
                z : 16
            }
        }
    },
    {
        assets : './assets/models/career/b5.glb',
        scale : .8,
        position : {
            x : 13,
            y : 0,
            z : 30
        },
        building : {
            dimension : {
                x : 4,
                y : 10,
                z : 7.5
            }
        }
    },
    {
        assets : './assets/models/career/b5.glb',
        scale : 1,
        position : {
            x : -86,
            y : 0,
            z : -60
        },
        building : {
            dimension : {
                x : 5,
                y : 10,
                z : 8.5
            }
        }
    },
    {
        assets : './assets/models/career/b4.glb',
        scale : 1,
        position : {
            x : 35,
            y : 0,
            z : -28
        },
        building : {
            dimension : {
                x : 6,
                y : 10,
                z : 6
            }
        }
    },
    {
        assets : './assets/models/career/b4.glb',
        scale : 1,
        position : {
            x : -86,
            y : 0,
            z : 1.5
        },
        building : {
            dimension : {
                x : 6,
                y : 10,
                z : 6
            }
        }
    },
    {
        assets : './assets/models/career/b3.glb',
        scale : 1.5,
        position : {
            x : -35,
            y : 0,
            z : 10
        },
        building : {
            dimension : {
                x : 4.5,
                y : 10,
                z : 4.5
            }
        }
    },
    {
        assets : './assets/models/career/b3.glb',
        scale : 1.5,
        position : {
            x : 65,
            y : 0,
            z : 53
        },
        building : {
            dimension : {
                x : 4.5,
                y : 10,
                z : 4.5
            }
        }
    },
    {
        assets : './assets/models/career/b2.glb',
        scale : 1.5,
        position : {
            x : 50,
            y : 0,
            z : 4
        },
        building : {
            dimension : {
                x : 7,
                y : 10,
                z : 7
            }
        }
    },
    {
        assets : './assets/models/career/b1.glb',
        scale : 2.5,
        position : {
            x : -10,
            y : 0,
            z : -40
        },
        building : {
            dimension : {
                x : 7,
                y : 10,
                z : 7
            }
        }
    },
    {
        assets : './assets/models/career/b1.glb',
        scale : 2.5,
        position : {
            x : 0,
            y : 0,
            z : 70
        },
        building : {
            dimension : {
                x : 7,
                y : 10,
                z : 7
            }
        }
    }
];

const borderBlock = [
    {
        position : {
            x : 115,
            y : 0,
            z : 0 
        },
        dimension : {
            x : 5,
            y : 15,
            z : 205 
        }
    },
    {
        position : {
            x : -148,
            y : 0,
            z : 0 
        },
        dimension : {
            x : 5,
            y : 15,
            z : 215 
        }
    },
    {
        position : {
            x : -20,
            y : 0,
            z : 100
        },
        dimension : {
            x : 278,
            y : 15,
            z : 5 
        }
    },
    {
        position : {
            x : -20,
            y : 0,
            z : -110 
        },
        dimension : {
            x : 268,
            y : 15,
            z : 5 
        }
    }
]

const triggerLocation = [
    {
        mission: 1,
        position : {
            x : -77,
            y : 0,
            z : -59
        },
        dimension : {
            x : 2,
            y : 2,
            z : 2 
        }
    },
    {
        mission: 2,
        position : {
            x : 75,
            y : 0,
            z : -25 
        },
        dimension : {
            x : 2,
            y : 2,
            z : 2 
        }
    },
    {
        mission: 3,
        position : {
            x : -61,
            y : 0,
            z : 60
        },
        dimension : {
            x : 2,
            y : 2,
            z : 2 
        }
    }
]
let triggerObj, triggerObjs = [], triggerPinObj, triggerPinObjs = [];

export default class Buildings {
    constructor(scene, world, gltfLoader, gui, car) {
        this.scene = scene;
        this.world = world;
        this.gltfLoader = gltfLoader;
        this.gui = gui;
        this.car = car;
        this.buildings = [];
        this.triggers = [];
        this.init();
    }

    init() {
        const gltfLoader = new GLTFLoader();

        // TRIGGERS
        const folderTriggers = this.gui.addFolder('Triggers');
        for(let i = 0; i < triggerLocation.length; i++){
            this.gltfLoader.load('./assets/models/pinLocation.glb', 
                d => {
                    triggerPinObj = d.scene
                    triggerPinObj.scale.set(1.2, 1.2, 1.2)
                    triggerPinObj.position.x = triggerLocation[i].position.x
                    triggerPinObj.position.y = triggerLocation[i].position.y + 2
                    triggerPinObj.position.z = triggerLocation[i].position.z

                    triggerPinObj.traverse( function ( child ) {
                        if(child.name == 'looooooc'){
                            child.material.roughness = 1
                            child.material.metalness = 0

                            child.material.color.r = 0.6
                            child.material.color.g = 0.3
                            child.material.color.b = 0
                        }
                    });

                    this.scene.add(triggerPinObj)
                    triggerPinObjs.push(triggerPinObj)
                    this.updateAllMaterials(triggerPinObj)

                }, null, e => {
                    console.error(e)
                })

            this.gltfLoader.load('./assets/models/podium.glb', 
                d => {
                    triggerObj = d.scene
                    triggerObj.scale.set(0.15, 0.15, 0.15)
                    triggerObj.position.x = triggerLocation[i].position.x
                    triggerObj.position.y = triggerLocation[i].position.y
                    triggerObj.position.z = triggerLocation[i].position.z
                    
                    const foldertriggerObj = folderTriggers.addFolder('Trigger - '+i)
                    foldertriggerObj.add(triggerObj.position, 'x').min(-1000).max(1000).step(0.001).name('X')
                    foldertriggerObj.add(triggerObj.position, 'y').min(-1000).max(1000).step(0.001).name('Y')
                    foldertriggerObj.add(triggerObj.position, 'z').min(-1000).max(1000).step(0.001).name('Z')

                    this.scene.add(triggerObj)
                    triggerObjs.push(triggerObj)
                    this.updateAllMaterials(triggerObj)

                    this.createTrigger( 
                        new THREE.Vector3(triggerLocation[i].position.x, triggerLocation[i].position.y, triggerLocation[i].position.z),
                        new THREE.Vector3(triggerLocation[i].dimension.x, triggerLocation[i].dimension.y, triggerLocation[i].dimension.z),
                        0xffff00,
                        false,
                        triggerLocation[i].mission,
                        this.car
                    );
    
                }, null, e => {
                    console.error(e)
                })
        }

        // BUILDINGS
        let buildingObj, buildingObjs = [];
        const folderBuildings = this.gui.addFolder('Buildings');
        for(let i = 0; i < objectBuilding.length; i++){
            this.gltfLoader.load(objectBuilding[i].assets, 
                d => {
                    buildingObj = d.scene
                    buildingObj.scale.set(objectBuilding[i].scale, objectBuilding[i].scale, objectBuilding[i].scale)
                    buildingObj.position.x = objectBuilding[i].position.x
                    buildingObj.position.y = objectBuilding[i].position.y
                    buildingObj.position.z = objectBuilding[i].position.z

                    if(objectBuilding[i].assets === './assets/models/career/b7.glb'){
                        buildingObj.rotation.y = Math.PI / 2
                    }
                    if(objectBuilding[i].assets === './assets/models/career/b5.glb'){
                        buildingObj.rotation.y = -Math.PI / 2
                    }
                    
                    const folderBuildingObj = folderBuildings.addFolder('Building - '+i)
                    folderBuildingObj.add(buildingObj.position, 'x').min(-1000).max(1000).step(0.001).name('X')
                    folderBuildingObj.add(buildingObj.position, 'y').min(-1000).max(1000).step(0.001).name('Y')
                    folderBuildingObj.add(buildingObj.position, 'z').min(-1000).max(1000).step(0.001).name('Z')

                    this.scene.add(buildingObj)
                    buildingObjs.push(buildingObj)
                    this.updateAllMaterials(buildingObj)
    
                    this.createBuilding( 
                        new THREE.Vector3(objectBuilding[i].position.x, objectBuilding[i].position.y, objectBuilding[i].position.z),
                        new THREE.Vector3(objectBuilding[i].building.dimension.x, objectBuilding[i].building.dimension.y, objectBuilding[i].building.dimension.z),
                        0xff0000,
                        false
                    );
    
                }, null, e => {
                    console.error(e)
                })
        }

        // BORDERS
        let borderObj,borderObjs = [];

        // Border Top & Bottom
        for(let i = -34; i < 27; i++){
            this.gltfLoader.load('./assets/models/pagar.glb', 
                d => {
                    borderObj = d.scene
                    borderObj.scale.set(1, 1, 1)
                    borderObj.position.x = i * 4.3
                    borderObj.position.y = 0
                    borderObj.position.z = -108

                    borderObj.traverse( function ( child ) {
                        if(child.name == 'pCylinder178'){
                            child.material.roughness = 1
                            child.material.metalness = 0.1

                            // child.material.color.r = 0.6
                            // child.material.color.g = 0.3
                            // child.material.color.b = 0
                        }
                    });

                    this.scene.add(borderObj)
                    borderObjs.push(borderObj)
                    this.updateAllMaterials(borderObj)
    
                }, null, e => {
                    console.error(e)
                })
        }
        for(let i = -34; i < 27; i++){
            this.gltfLoader.load('./assets/models/pagar.glb', 
                d => {
                    borderObj = d.scene
                    borderObj.scale.set(1, 1, 1)
                    borderObj.position.x = i * 4.3
                    borderObj.position.y = 0
                    borderObj.position.z = 98

                    borderObj.traverse( function ( child ) {
                        if(child.name == 'pCylinder178'){
                            child.material.roughness = 1
                            child.material.metalness = 0.1

                            // child.material.color.r = 0.6
                            // child.material.color.g = 0.3
                            // child.material.color.b = 0
                        }
                    });

                    this.scene.add(borderObj)
                    borderObjs.push(borderObj)
                    this.updateAllMaterials(borderObj)
    
                }, null, e => {
                    console.error(e)
                })
        }
        // Border Left & Right
        for(let i = -24; i < 23; i++){
            this.gltfLoader.load('./assets/models/pagar.glb', 
                d => {
                    borderObj = d.scene
                    borderObj.scale.set(1, 1, 1)
                    borderObj.position.x = 113
                    borderObj.position.y = 0
                    borderObj.position.z = i * 4.3
                    borderObj.rotation.y = Math.PI / 2

                    borderObj.traverse( function ( child ) {
                        if(child.name == 'pCylinder178'){
                            child.material.roughness = 1
                            child.material.metalness = 0.1

                            // child.material.color.r = 0.6
                            // child.material.color.g = 0.3
                            // child.material.color.b = 0
                        }
                    });

                    this.scene.add(borderObj)
                    borderObjs.push(borderObj)
                    this.updateAllMaterials(borderObj)
    
                }, null, e => {
                    console.error(e)
                })
        }
        for(let i = -24; i < 23; i++){
            this.gltfLoader.load('./assets/models/pagar.glb', 
                d => {
                    borderObj = d.scene
                    borderObj.scale.set(1, 1, 1)
                    borderObj.position.x = -146
                    borderObj.position.y = 0
                    borderObj.position.z = i * 4.3
                    borderObj.rotation.y = Math.PI / 2

                    borderObj.traverse( function ( child ) {
                        if(child.name == 'pCylinder178'){
                            child.material.roughness = 1
                            child.material.metalness = 0.1

                            // child.material.color.r = 0.6
                            // child.material.color.g = 0.3
                            // child.material.color.b = 0
                        }
                    });

                    this.scene.add(borderObj)
                    borderObjs.push(borderObj)
                    this.updateAllMaterials(borderObj)
    
                }, null, e => {
                    console.error(e)
                })
        }

        // Border Block
        for(let i = 0; i < borderBlock.length; i++){
            this.createBuilding( 
                new THREE.Vector3(borderBlock[i].position.x, borderBlock[i].position.y, borderBlock[i].position.z),
                new THREE.Vector3(borderBlock[i].dimension.x, borderBlock[i].dimension.y, borderBlock[i].dimension.z),
                0xff0000,
                false
            );
        }


        this.updatePhysics();
    }

    updateAllMaterials(object){

        object.traverse((child) =>{
            if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial){
                child.material.needsUpdate = true
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    createTrigger(position, dimension, color, visible, mission, car) {
        const triggerGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
        const triggerMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: false});
        const trigger = new THREE.Mesh(triggerGeometry, triggerMaterial);
        trigger.castShadow = true;
        trigger.receiveShadow = true;
        trigger.scale.copy(dimension);
        trigger.position.copy(position);
        if(visible){
            this.scene.add(trigger);
        }
    
        const wheelMaterial = new CANNON.Material("wheelMaterial");
        const triggerShape = new CANNON.Box(new CANNON.Vec3(dimension.x * 0.5, dimension.y * 0.5, dimension.z * 0.5));
        const triggerBody = new CANNON.Body({
            mass: 0,
            position,
            shape: triggerShape,
            material: wheelMaterial
        });
        
        triggerBody.addEventListener("collide", function(e){
            car.resetCarHitTrigger();
            startGame(mission);
        } );
    
        this.world.addBody(triggerBody);
    
        trigger.cannonBody = triggerBody;

        this.triggers.push(trigger);
    }

    createBuilding(position, dimension, color, visible) {
        const buildingGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
        const buildingMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: false});
        const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
        building.castShadow = true;
        building.receiveShadow = true;
        building.scale.copy(dimension);
        building.position.copy(position);
        if(visible){
            this.scene.add(building);
        }
    
        const wheelMaterial = new CANNON.Material("wheelMaterial");
        const buildingShape = new CANNON.Box(new CANNON.Vec3(dimension.x * 0.5, dimension.y * 0.5, dimension.z * 0.5));
        const buildingBody = new CANNON.Body({
            mass: 0,
            position,
            shape: buildingShape,
            material: wheelMaterial
        });

        // buildingBody.maxForce = 1;
        // buildingBody.addEventListener("collide", function(e){ console.log("building collided"); } );
    
        this.world.addBody(buildingBody);
    
        building.cannonBody = buildingBody;

        this.buildings.push(building);
    }

    updatePhysics() {
        const update = () => {
            const time = performance.now() * 0.003;
            for(let i = 0; i < triggerLocation.length; i++){
                triggerPinObjs[i].rotation.y = time * 0.5;
            }

            if(this.buildings) {
                for(const obj of this.buildings) {
                    obj.position.copy(obj.cannonBody.position);
                    obj.quaternion.copy(obj.cannonBody.quaternion);
                }
            }
        }
        this.world.addEventListener('postStep', update);
    }
}