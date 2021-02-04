/**
 * Debug
 */
/*
const gui = new dat.GUI()
let debugState = false
*/

let stats = new Stats();
//stats.showPanel(0);
//document.body.appendChild(stats.dom);

/**
 * Tools
 */

const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

const angleLerp = (a0, a1, t) => a0 + shortAngleDist(a0, a1) * t;

const shortAngleDist = (a0, a1) => {
  var max = Math.PI * 2;
  var da = (a1 - a0) % max;
  return 2 * da % max - da;
}

/**
 * Base
 */

const canvas = document.querySelector('#intro-canvas')
const scene = new THREE.Scene()

scene.background = new THREE.Color("#1D2A2B");


/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(72, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-15, 4, 13)
//camera.position.set(0, 5, 10)

scene.add(camera)

controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = .05;
controls.target.set(0, 0, 0);
controls.keys = { LEFT: 0, RIGHT: 0, UP: 0, BOTTOM: 0 }
controls.minDistance = 4;
controls.maxDistance = 38;
/**
 * Textures
 */



/**
 * Environment map
 */

const cubeTextureLoader = new THREE.CubeTextureLoader()
const environmentMap = cubeTextureLoader.load([
  'textures/environmentMaps/rb2/side.png',
  'textures/environmentMaps/rb2/side.png',
  'textures/environmentMaps/rb2/top.png',
  'textures/environmentMaps/rb2/bottom.png',
  'textures/environmentMaps/rb2/side.png',
  'textures/environmentMaps/rb2/side.png'
])


scene.background = environmentMap;

scene.fog = new THREE.Fog(new THREE.Color("#262837"), 0, 150);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 2.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, .5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(2048, 2048)
directionalLight.shadow.camera.far = 300
directionalLight.shadow.normalBias = 0.05

directionalLight.shadow.camera.left = -30
directionalLight.shadow.camera.top = 30
directionalLight.shadow.camera.right = 30
directionalLight.shadow.camera.bottom = -30


directionalLight.position.set(0, 50, 0)
scene.add(directionalLight)



/**
 * Materials
 */

const textureLoader = new THREE.TextureLoader()

const rabbitSkin = new THREE.MeshStandardMaterial({
  metalness: 0,
  roughness: 1,
  color: 0xf6d540,
})


const ballMaterial = new THREE.MeshStandardMaterial({
  metalness: 0,
  roughness: 1,
  color: 0xee7013,
})



const carrotTexture = textureLoader.load('textures/matcaps/carrot3.jpg')
const carrotMaterial = new THREE.MeshMatcapMaterial()
carrotMaterial.matcap = carrotTexture
carrotMaterial.flatShading = true
carrotMaterial.transparent = true

const rabbitTexture = textureLoader.load('textures/matcaps/rabbit.jpg')
const rabbitMaterial = new THREE.MeshMatcapMaterial()
rabbitMaterial.matcap = rabbitTexture
rabbitMaterial.flatShading = true
rabbitMaterial.transparent = true

const landTexture = textureLoader.load('textures/matcaps/floor1.jpg')
const landMaterial = new THREE.MeshMatcapMaterial()
landMaterial.matcap = landTexture
landMaterial.flatShading = true

const eyeMaterial = new THREE.MeshStandardMaterial({
  metalness: 0,
  roughness: 0.8,
  color: 0x000000,
  transparent: true
})

/**
 * Physics
 */
const world = new CANNON.World()
world.gravity.set(0, -9.82, 0)


world.broadphase = new CANNON.SAPBroadphase(world)
//world.allowSleep = true


const defaultMat = new CANNON.Material('default')

const rabbitMat = new CANNON.Material('rabbit')
const floorMat = new CANNON.Material('floor')
const ballMat = new CANNON.Material('ball')

const defaultContact = new CANNON.ContactMaterial(
  defaultMat,
  defaultMat, {
    friction: 1,
    restitution: 0
  }
)

const floorContact = new CANNON.ContactMaterial(
  defaultMat,
  floorMat, {
    friction: 1,
    restitution: 0
  }
)

const rabbitContact = new CANNON.ContactMaterial(
  rabbitMat,
  floorMat, {
    friction: 1,
    restitution: 0
  }
)


const ballContact = new CANNON.ContactMaterial(
  ballMat,
  floorMat, {
    friction: 1,
    restitution: .5
  }
)

const RabbitBallContact = new CANNON.ContactMaterial(
  ballMat,
  rabbitMat, {
    friction: 1,
    restitution: 1.2
  }
)


world.addContactMaterial(defaultContact)
world.addContactMaterial(floorContact)
world.addContactMaterial(rabbitContact)
world.addContactMaterial(ballContact)
world.addContactMaterial(RabbitBallContact)




/**
 * Utils
 */


const createBall = (name, radius, position) => {

  const shape = new CANNON.Sphere(radius)
  const body = new CANNON.Body({
    mass: 2,
    position: new CANNON.Vec3(0, 5, 0),
    shape: shape,
    material: ballMat
  })
  body.position.copy(position)

  world.addBody(body)

  obj[name] = { body }

}



//create floor
const createFloor = (radius = 16) => {

  //const shape = new CANNON.Cylinder(radius, radius, 1, 16)

  const shape = new CANNON.Box(new CANNON.Vec3(12.5, .5, 7.2))

  const body = new CANNON.Body({
    mass: 0,
    shape: shape,
    position: new CANNON.Vec3(0, -.6, 0),
    material: floorMat
  })

  body.addShape(new CANNON.Box(new CANNON.Vec3(7, .5, 1.8)), new CANNON.Vec3(-.5, 0, 8))
  body.addShape(new CANNON.Box(new CANNON.Vec3(9, .5, 1.7)), new CANNON.Vec3(-.5, 0, -8))

  body.addShape(new CANNON.Box(new CANNON.Vec3(1, .5, 5)), new CANNON.Vec3(-13.5, 0, 0))
  body.addShape(new CANNON.Box(new CANNON.Vec3(1, .5, 4)), new CANNON.Vec3(13.5, 0, 0))

  world.addBody(body)

}



//create floor
const createGoal = (x) => {

  const shape = new CANNON.Box(new CANNON.Vec3(0.1, 1.9, 0.1))
  const body = new CANNON.Body({
    mass: 0,
    shape: shape,
    position: new CANNON.Vec3(x, 1.9, 2.9),
    material: floorMat
  })

  body.addShape(new CANNON.Box(new CANNON.Vec3(0.1, 1.9, 0.1)), new CANNON.Vec3(0, 0, -5.8))
  body.addShape(new CANNON.Box(new CANNON.Vec3(0.1, 0.1, 2.9)), new CANNON.Vec3(0, 1.8, -2.9))

  world.addBody(body)

}

//create floor
const createStraw = (z) => {

  const shape = new CANNON.Box(new CANNON.Vec3(10, .3, .5)) //1
  const body = new CANNON.Body({
    mass: 0,
    shape: shape,
    position: new CANNON.Vec3(0, .4, z),
    material: floorMat
  })

  world.addBody(body)
}

const createSmallStraw = (x, z) => {

  const shape = new CANNON.Box(new CANNON.Vec3(.5, .3, 1)) //1
  const body = new CANNON.Body({
    mass: 0,
    shape: shape,
    position: new CANNON.Vec3(z, .4, x),
    material: floorMat
  })

  world.addBody(body)
}



/**
 * LEMON
 */

const wheelColliding = () => {
  jumpReady = true
}


const createLeg = (name, radius, position) => {

  const mesh = new THREE.Mesh(new THREE.SphereBufferGeometry(radius, 20, 20), rabbitMaterial)
  mesh.castShadow = true
  mesh.position.copy(position)
  scene.add(mesh)

  const shape = new CANNON.Sphere(radius)

  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 0, 0),
    shape: shape,
    material: rabbitMat
  })
  body.position.copy(position)

  world.addBody(body)

  obj[name] = { mesh, body }

  body.addEventListener('collide', wheelColliding)
}



const createTale = (name, radius, position) => {

  const mesh = new THREE.Mesh(new THREE.SphereBufferGeometry(radius, 20, 20), rabbitMaterial)
  mesh.castShadow = true
  mesh.position.copy(position)
  scene.add(mesh)

  const shape = new CANNON.Sphere(radius)

  const body = new CANNON.Body({
    mass: 1,
    position: position,
    shape: shape,
    material: rabbitMat
  })
  body.position.copy(position)

  world.addBody(body)

  obj[name] = { mesh, body }

}





// Create box
const boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1)


const createEar = (name, width, height, depth, position, rotation = 0) => {

  const mesh = new THREE.Mesh(boxGeometry, rabbitMaterial)
  mesh.scale.set(width, height, depth)
  mesh.castShadow = true
  mesh.position.copy(position)
  scene.add(mesh)

  const shape = new CANNON.Box(new CANNON.Vec3(width * .5, height * .5, depth * .5))

  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 0, 0),
    shape: shape,
    material: rabbitMat
  })


  body.position.copy(position)
  world.addBody(body)

  obj[name] = { mesh, body }
}

let startPosition = {
  x: -5,
  y: 0,
  z: 0
}


const createLemon = () => {
  const lemon = new THREE.Group()

  const body = new CANNON.Body({
    mass: 20,
    position: new CANNON.Vec3(startPosition.x, 0, 0),
    material: rabbitMat
  })

  function createMesh(a, b, c, h) {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(a, b, c, 16), rabbitMaterial
    )
    mesh.castShadow = true
    mesh.position.y = .15 + h
    lemon.add(mesh)

    var quat = new CANNON.Quaternion()
    quat.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI * .5)

    body.addShape(new CANNON.Cylinder(a, b, c, 16), new CANNON.Vec3(0, .15 + h, 0), quat)

  }




  const eyeR = new THREE.Mesh(
    new THREE.SphereBufferGeometry(.1, 20, 20), eyeMaterial
  )

  const eyeL = new THREE.Mesh(
    new THREE.SphereBufferGeometry(.1, 20, 20), eyeMaterial
  )


  eyeR.scale.set(.5, 1, 1)
  eyeR.position.set(.05, .3, .5)

  eyeL.scale.set(.5, .75, 1)
  eyeL.position.set(-.05, .3, .5)

  lemon.add(eyeR)
  lemon.add(eyeL)

  createMesh(.6, .57, .2, 0)
  createMesh(.57, .6, .2, .2)
  createMesh(.5, .57, .2, .4)
  createMesh(.4, .5, .1, .55)
  createMesh(.2, .4, .05, .625)


  scene.add(lemon)

  world.addBody(body)

  obj["lemon"] = {
    mesh: lemon,
    body: body
  }

}


/**
 * ADD ELEMENTS
 */
const obj = []

//Rabbit
var speedR = 0
var speedL = 0
var maxSpeedR = 0
var maxSpeedL = 0

const feetSize = .35
const feetHeight = .05
const feetWidth = .11

createLemon()
/*
createBox("leaf1", .02, .2, .5, { x: 0, y: 6, z: 0 })
createBox("leaf2", .01, .1, .4, { x: 0, y: 6, z: 0 })
*/
createLeg("wheelL1", feetWidth, { x: startPosition.x - feetSize, y: feetHeight, z: feetSize })
createLeg("wheelR1", feetWidth, { x: startPosition.x + feetSize, y: feetHeight, z: feetSize })

createLeg("wheelL3", feetWidth, { x: startPosition.x - feetSize * .8, y: feetHeight, z: -feetSize * 1.2 })
createLeg("wheelR3", feetWidth, { x: startPosition.x + feetSize * .8, y: feetHeight, z: -feetSize * 1.2 })

createLeg("wheelL2", feetWidth, { x: startPosition.x - feetSize * 1.4, y: feetHeight, z: 0 })
createLeg("wheelR2", feetWidth, { x: startPosition.x + feetSize * 1.4, y: feetHeight, z: 0 })

createEar("earL", .2, .02, .5, { x: startPosition.x, y: 1, z: 0 })
createEar("earR", .15, .02, .4, { x: startPosition.x, y: .8, z: 0 })

createTale("tale", .12, { x: startPosition.x, y: .2, z: -.6 })

//Ball

createBall("ball", .9, { x: 0, y: 1, z: 0 })
obj["ball"].body.angularVelocity.set(Math.random(), Math.random(), Math.random())


createGoal(11)
createGoal(-11)

/*
createStraw(-7)
createStraw(7)

createSmallStraw(-4.5, 11)
createSmallStraw(4.5, 11)
createSmallStraw(-4.5, -11)
createSmallStraw(4.5, -11)
*/
//floor
createFloor()


let loader = new THREE.GLTFLoader();
loader.load('objects/rabbit14.glb', function(gltf) {

  gltf.scene.traverse(function(child) {

    if (child.isMesh) {

      //child.material = landMaterial
      child.material.metalness = 0
      child.material.roughness = 1
      child.castShadow = true;
      child.receiveShadow = true

    }
  })

  gltf.scene.position.y = -2.8
  gltf.scene.scale.set(.7, .7, .7)

  scene.add(gltf.scene);
})


let blink = 0;
let blinking = Math.random() * 500

let ball;

loader.load('objects/ball.glb', function(gltf) {

  ball = gltf.scene.children[0]

  ball.material = carrotMaterial
  ball.castShadow = true;
  ball.receiveShadow = true;


  ball.position.y = 2


  scene.add(ball);
  tick()

})


/**
 * constraint
 */

var zero = new CANNON.Vec3();
// Constrain wheels
var constraints = [];

// Hinge the wheels
var Axis = new CANNON.Vec3(1, 0, 0);

constraints.push(new CANNON.HingeConstraint(obj["lemon"].body, obj["wheelL1"].body, { pivotA: new CANNON.Vec3(-feetSize * .9, feetHeight, feetSize * 1.1), axisA: Axis, pivotB: zero, axisB: Axis }));
constraints.push(new CANNON.HingeConstraint(obj["lemon"].body, obj["wheelL2"].body, { pivotA: new CANNON.Vec3(-feetSize * 1.4, feetHeight, 0), axisA: Axis, pivotB: zero, axisB: Axis }));
constraints.push(new CANNON.HingeConstraint(obj["lemon"].body, obj["wheelL3"].body, { pivotA: new CANNON.Vec3(-feetSize * .8, feetHeight, -feetSize * 1), axisA: Axis, pivotB: zero, axisB: Axis }));

constraints.push(new CANNON.HingeConstraint(obj["lemon"].body, obj["wheelR1"].body, { pivotA: new CANNON.Vec3(feetSize * .9, feetHeight, feetSize * 1.1), axisA: Axis, pivotB: zero, axisB: Axis }));
constraints.push(new CANNON.HingeConstraint(obj["lemon"].body, obj["wheelR2"].body, { pivotA: new CANNON.Vec3(feetSize * 1.4, feetHeight, 0), axisA: Axis, pivotB: zero, axisB: Axis }));
constraints.push(new CANNON.HingeConstraint(obj["lemon"].body, obj["wheelR3"].body, { pivotA: new CANNON.Vec3(feetSize * .8, feetHeight, -feetSize * 1), axisA: Axis, pivotB: zero, axisB: Axis }));



for (var i = 0; i < constraints.length; i++) {
  world.addConstraint(constraints[i]);
  constraints[i].enableMotor();
}





var earRJoint = new CANNON.ConeTwistConstraint(obj["lemon"].body, obj["earR"].body, {
  pivotA: new CANNON.Vec3(.15, .75, .3),
  pivotB: new CANNON.Vec3(0, 0, .2),
  axisA: CANNON.Vec3.UNIT_Y,
  axisB: new CANNON.Vec3(0, .42, -1),
  angle: 0,
  twistAngle: 0
});
world.addConstraint(earRJoint);


var earLJoint = new CANNON.ConeTwistConstraint(obj["lemon"].body, obj["earL"].body, {
  pivotA: new CANNON.Vec3(-.15, .75, .3),
  pivotB: new CANNON.Vec3(0, 0, .2),
  axisA: CANNON.Vec3.UNIT_Y,
  axisB: new CANNON.Vec3(0, .42, -1),
  angle: 0,
  twistAngle: 0
});
world.addConstraint(earLJoint);


var taleJoint = new CANNON.ConeTwistConstraint(obj["lemon"].body, obj["tale"].body, {
  pivotA: new CANNON.Vec3(0, .25, -.62),
  pivotB: new CANNON.Vec3(0, 0, .05),
  axisA: CANNON.Vec3.UNIT_Y,
  axisB: new CANNON.Vec3(0, -1, 0),
  angle: 2,
  twistAngle: 2
});
world.addConstraint(taleJoint);


/*
// Enable motors and set their velocities
var localPivotA1 = new CANNON.Vec3(.1, .95, 0);
var localPivotB1 = new CANNON.Vec3(0, 0, .3);
var constraint1 = new CANNON.PointToPointConstraint(obj["lemon"].body, localPivotA1, obj["leaf1"].body, localPivotB1);
world.addConstraint(constraint1);


var localPivotA2 = new CANNON.Vec3(0, .92, .1);
var localPivotB2 = new CANNON.Vec3(0, 0, .25);
var constraint2 = new CANNON.PointToPointConstraint(obj["lemon"].body, localPivotA2, obj["leaf2"].body, localPivotB2);
world.addConstraint(constraint2);




/**
 * Deco
 */



let circleGeo = new THREE.SphereGeometry(4, 36, 36);
let circleMat = new THREE.MeshBasicMaterial({ color: 0xe2c08e });
let moon = new THREE.Mesh(circleGeo, circleMat);
moon.position.set(0, 20, 0);
scene.add(moon);


let stars = [];

let starGeo = new THREE.SphereGeometry(.15, 6, 6);
let starMat = new THREE.MeshBasicMaterial({ color: 0xe2c08e });

for (var i = 0; i < 100; i++) {

  stars.push(new THREE.Mesh(starGeo, starMat))

  let sx = Math.sin(Math.random() * Math.PI * 2) * 50
  let sy = Math.cos(Math.random() * Math.PI * 2) * 50
  let sz = Math.sin(Math.random() * Math.PI * 2) * 50

  stars[i].position.set(sx, sy, sz);
  scene.add(stars[i]);

}



/**
 * Renderer
 */

var cannonDebugRenderer = new THREE.CannonDebugRenderer(scene, world);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))




/*
let areaImage = new Image();
    areaImage.src = POSTPROCESSING.SMAAEffect.areaImageDataURL;
let searchImage = new Image();
    searchImage.src = POSTPROCESSING.SMAAEffect.searchImageDataURL;
let smaaEffect = new POSTPROCESSING.SMAAEffect(searchImage,areaImage,1);
*/
let godraysEffect = new POSTPROCESSING.GodRaysEffect(camera, moon, {
  samples: 100
});

let blurEffect = new POSTPROCESSING.DepthOfFieldEffect(camera, {
  opacity: 1,
  bokehScale: 1,
  focalLength: 0.025
});


let renderPass = new POSTPROCESSING.RenderPass(scene, camera);
let effectPass = new POSTPROCESSING.EffectPass(camera, godraysEffect);
//let effectPass2 = new POSTPROCESSING.EffectPass(camera, blurEffect);

//effectPass.renderToScreen = true;
// effectPass2.renderToScreen = true;

composer = new POSTPROCESSING.EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(effectPass);
//composer.addPass(effectPass2);       

/*
renderer.gammaFactor = 2;
renderer.outputEncoding = THREE.GammaEncoding
renderer.toneMapping = THREE.NoToneMapping





/**
 * Animate
 */
const clock = new THREE.Clock()
let oldElapsedTime = 0

var keys = []

var jumpReady = true

var jumpForce = 30;

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 32:
      if (jumpReady) {
        var target = new THREE.Vector3()
        direction = obj["lemon"].mesh.getWorldDirection(target)

        obj["lemon"].body.velocity = new CANNON.Vec3(direction.x * (speedL + speedR) / 20, 9, direction.z * (speedL + speedR) / 20);

        jumpReady = false

      }

      break;
  }

  keys[event.keyCode] = true

};

document.onkeyup = function(event) {
  keys[event.keyCode] = false
}




const tick = () => {

  stats.begin()



  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - oldElapsedTime
  oldElapsedTime = elapsedTime

  world.step(1 / 60, deltaTime, 3)


  /**
   * keyboard
   */


  if (keys[38]) {
    maxSpeedR = 55
    maxSpeedL = 55
  }

  if (keys[40]) {
    maxSpeedR = -30
    maxSpeedL = -30
  }

  if (keys[37]) {
    maxSpeedL = 60
    maxSpeedR = 0
  }

  if (keys[39]) {
    maxSpeedL = 0
    maxSpeedR = 60
  }
  if (!keys[37] && !keys[38] && !keys[39] && !keys[40]) {
    maxSpeedR = 0
    maxSpeedL = 0
  }

  var accR = Math.abs(speedR) < Math.abs(maxSpeedR) ? .08 : .1
  var accL = Math.abs(speedL) < Math.abs(maxSpeedL) ? .08 : .1

  speedR = lerp(speedR, maxSpeedR, accR) //+Math.sin(elapsedTime*20)*speedR/20
  speedL = lerp(speedL, maxSpeedL, accL) //+Math.sin(elapsedTime*20)*speedL/20

  for (var i = 0; i < 3; i++) {
    constraints[i].setMotorSpeed(-speedL);
  }
  for (var i = 3; i < 6; i++) {
    constraints[i].setMotorSpeed(-speedR);
  }


  var onAir = jumpReady ? 1 : -.5

  speedL *= 1.0 * onAir
  speedR *= 1.0 * onAir
  /**
   * copy cannon => mesh
   */


  obj["wheelL1"].body.position.y += Math.sin(elapsedTime * 15) * speedL / 3000 - .005
  obj["wheelL2"].body.position.y += Math.sin(elapsedTime * 15 + 2) * speedL / 3000 - .005
  obj["wheelL3"].body.position.y += Math.sin(elapsedTime * 15 + 4) * speedL / 3000 - .005


  obj["wheelR1"].body.position.y += Math.sin(elapsedTime * 15 + 2) * speedR / 3000 - .005
  obj["wheelR2"].body.position.y += Math.sin(elapsedTime * 15 + 4) * speedR / 3000 - .005
  obj["wheelR3"].body.position.y += Math.sin(elapsedTime * 15 + 6) * speedR / 3000 - .005



  if (obj["lemon"].body.position.y < -40) {
    rabbitMaterial.opacity = 1;

    obj["lemon"].body.position.set(0, 10.5, 0)
    obj["lemon"].body.velocity.set(0, 0, 0)
    obj["lemon"].body.angularVelocity.set(0, 0, 0)

    obj["wheelL1"].body.position.set(0, 10.1, 0)
    obj["wheelL2"].body.position.set(0, 10.1, 0)
    obj["wheelL3"].body.position.set(0, 10.1, 0)
    obj["wheelR1"].body.position.set(0, 10.1, 0)
    obj["wheelR2"].body.position.set(0, 10.1, 0)
    obj["wheelR3"].body.position.set(0, 10.1, 0)

    obj["earR"].body.position.set(0, 11, 0)
    obj["earL"].body.position.set(0, 11, 0)
    obj["tale"].body.position.set(0, 10.7, -.6)


  }

  for (var key in obj) {
    object = obj[key]

    if (key != "ball") {
      object.mesh.position.copy(object.body.position)
    }

    if (key != "trempoline" && key != "ball") {
      object.mesh.quaternion.copy(object.body.quaternion)
    }
  }



  if (obj["ball"].body.position.y < -25) {
    ball.material.opacity = 1;
    obj["ball"].body.position.set(0, 10, 0)
    obj["ball"].body.velocity.set(0, 0, 0)
    obj["ball"].body.angularVelocity.set(Math.random(), Math.random(), Math.random())
  }

  ball.position.copy(obj["ball"].body.position)
  ball.quaternion.copy(obj["ball"].body.quaternion)

  if (obj["ball"].body.position.y < 0) {
    ball.material.opacity = 1 + obj["ball"].body.position.y / 20;
  }

  if (obj["lemon"].body.position.y < 0) {
    rabbitMaterial.opacity = 1 + obj["lemon"].body.position.y / 40;
  }




  // Update controls
  //camera.position.y = obj["lemon"].body.position.y + 4

  if (camera.position.y < obj["lemon"].body.position.y + 4) {
    camera.position.y = lerp(camera.position.y, obj["lemon"].body.position.y + 4, .05)
  }

  if (Math.abs(camera.position.y - obj["lemon"].body.position.y) > 10) {
    camera.position.y = lerp(camera.position.y, obj["lemon"].body.position.y, .01)
  }


  controls.target.copy(obj["lemon"].body.position);


  blink++;

  if (blink > blinking) {
    eyeMaterial.opacity = 0
  }

  if (blink > blinking + 7) {
    eyeMaterial.opacity = 1
    blink=0
    blinking = Math.random() * 500
  }



  controls.update()


  // Render
  renderer.render(scene, camera)
  //cannonDebugRenderer.update();


  composer.render(0.1);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)

  stats.end()
}
