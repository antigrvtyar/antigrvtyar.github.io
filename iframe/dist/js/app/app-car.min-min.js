const _0x39d9=['CameraHelper','enablePan','.car-thumb','model','encoding','dimension','(max-width:\x20769px)','hide','physicallyCorrectLights','Failed\x20Load\x203D\x20Car','SpotLightHelper','addEventListener','environmentMap','preload','active','#appendCarThumb','castShadow','requestAnimationFrame','click','./assets/images/textures/environmentMaps/1/ny.png','Loading\x203D\x20Car\x20...<br>','./assets/images/textures/environmentMaps/1/nz.png','default','setDRACOLoader','confirmCar','minDistance','traverse','innerHeight','load','DirectionalLight','car','#carName\x20h2:first-child','camera','setTimeout','AmbientLight','.car-name','update','target','intensity','enableZoom','angle','querySelector','shadow','opacity','Color','mapSize','./assets/models/Sport/car-fullset.glb','devicePixelRatio','play','MeshBasicMaterial','enableRotate','#textLoading3Dcar','outputEncoding','receiveShadow','innerWidth','selectCar','visible','onError','#carThumb','#carThumb\x20a:first-child','height','addClass','#carName\x20h2:last-child','.preloader-model','toFixed','./assets/images/textures/environmentMaps/1/py.png','AxesHelper','power2.out','max','scene','WebGLRenderer','Scene','DirectionalLightHelper','scale','material','./assets/images/textures/environmentMaps/1/px.png','MPFcarConfirm','setPixelRatio','html','position','#carThumbButton','init','removeClass','LoadingManager','assets','setSize','PlaneGeometry','./assets/models/shadow.png','./assets/draco/gltf/','./assets/models/SUV/car-fullset.glb','width','error','matches','linear','./assets/images/textures/environmentMaps/1/pz.png','CubeTextureLoader','wdth','min','updateProjectionMatrix','stop','background','setDecoderPath','enabled','aspect','needsUpdate','set','add','.drag-info','getElementById','canvas.webgl','rotation','appendTo','Mesh','MeshStandardMaterial','./assets/images/textures/environmentMaps/1/nx.png','close','SpotLight'];(function(_0x5bfc79,_0x4cf05d){const _0x39d98b=function(_0x616ccc){while(--_0x616ccc){_0x5bfc79['push'](_0x5bfc79['shift']());}};_0x39d98b(++_0x4cf05d);}(_0x39d9,0x16a));const _0x616c=function(_0x5bfc79,_0x4cf05d){_0x5bfc79=_0x5bfc79-0x1f3;let _0x39d98b=_0x39d9[_0x5bfc79];return _0x39d98b;};const _0x27816a=_0x616c;import*as _0x392eee from'../../build/three.module.js';import{OrbitControls}from'../../js/jsm/controls/OrbitControls.js';import{GLTFLoader}from'../../js/jsm/loaders/GLTFLoader.js';import{DRACOLoader}from'../../js/jsm/loaders/DRACOLoader.js';import{GUI}from'../../js/jsm/libs/dat.gui.module.js';let car1,car2,speed=0x0,rotationSpeed=0x0,keysDown=[],carDefault=getUrlParameter('car'),carConfirm;function selectCar(_0xeba7ba,_0x48091e){const _0x18123a=_0x616c;_0xeba7ba==0x0?($(_0x18123a(0x223))['addClass'](_0x18123a(0x1f6)),$('#carThumb\x20a:last-child')['removeClass'](_0x18123a(0x1f6)),$(_0x18123a(0x207))['addClass'](_0x18123a(0x1f6)),$(_0x18123a(0x226))[_0x18123a(0x23a)](_0x18123a(0x1f6)),_0x48091e=='click'&&(car1[_0x18123a(0x220)]=!![],car2[_0x18123a(0x220)]=![])):($('#carThumb\x20a:first-child')[_0x18123a(0x23a)](_0x18123a(0x1f6)),$('#carThumb\x20a:last-child')[_0x18123a(0x225)](_0x18123a(0x1f6)),$('#carName\x20h2:first-child')['removeClass'](_0x18123a(0x1f6)),$(_0x18123a(0x226))['addClass'](_0x18123a(0x1f6)),_0x48091e==_0x18123a(0x1fa)&&(car1[_0x18123a(0x220)]=![],car2[_0x18123a(0x220)]=!![])),carConfirm=_0xeba7ba;}selectCar(carDefault,_0x27816a(0x239)),window[_0x27816a(0x21f)]=selectCar;function confirmCar(){const _0x4478ca=_0x27816a;localStorage['setItem'](_0x4478ca(0x234),carConfirm),directPage('map.html','?car='+carConfirm);}window[_0x27816a(0x200)]=confirmCar;window['matchMedia'](_0x27816a(0x263))[_0x27816a(0x244)]&&($(_0x27816a(0x222))[_0x27816a(0x257)](_0x27816a(0x1f7)),$(_0x27816a(0x238))[_0x27816a(0x257)]('#appendCarThumbButton'));const gui=new GUI();gui[_0x27816a(0x25b)](),gui[_0x27816a(0x264)](),gui[_0x27816a(0x242)]=0xfa;const configurations={'camera':{'zoom':{'default':{'min':0xa,'max':0x14}},'default':{'x':16.44433589785716,'y':22.049643505119644,'z':10.3910143121738},'to':{'x':10.06135411590877,'y':6.855735782057371,'z':8.921951938623199},'target':{'x':0x0,'y':0.6,'z':0x0}},'model':{'car':[{'assets':_0x27816a(0x216),'scale':0.7,'position':{'x':0x0,'y':1.1,'z':0x0}},{'assets':_0x27816a(0x241),'scale':0.7,'position':{'x':0x0,'y':1.1,'z':0x0}}],'shadow':{'assets':_0x27816a(0x23f),'opacity':0.18,'dimension':{'wdth':9.6,'height':7.6},'rotation':{'x':-Math['PI']/0x2,'y':0x0,'z':Math['PI']},'position':{'x':0x0,'y':0x0,'z':0x0}}}},dragInfoPlayer=document[_0x27816a(0x254)]('dragInfo'),loadingManagerModel=new _0x392eee[(_0x27816a(0x23b))](()=>{const _0x3ae495=_0x27816a;$(_0x3ae495(0x227))[_0x3ae495(0x225)](_0x3ae495(0x264)),$(_0x3ae495(0x25f))[_0x3ae495(0x23a)](_0x3ae495(0x264)),$(_0x3ae495(0x20b))[_0x3ae495(0x23a)](_0x3ae495(0x264)),$('.car-title')[_0x3ae495(0x23a)](_0x3ae495(0x264)),scene[_0x3ae495(0x252)](shadow),window['setTimeout'](()=>{const _0x399734=_0x3ae495;moveCameraDefault(0x2,_0x399734(0x245)),window[_0x399734(0x209)](()=>{const _0x5c234a=_0x399734;$(_0x5c234a(0x253))['removeClass']('hide'),dragInfoPlayer[_0x5c234a(0x218)](),controls[_0x5c234a(0x25e)]=!![],controls[_0x5c234a(0x20f)]=!![],controls['enableDamping']=!![],controls[_0x5c234a(0x21a)]=!![],window[_0x5c234a(0x209)](()=>{const _0x4f2046=_0x5c234a;$(_0x4f2046(0x253))['addClass'](_0x4f2046(0x264)),window[_0x4f2046(0x209)](()=>{const _0xa294cd=_0x4f2046;dragInfoPlayer[_0xa294cd(0x24b)]();},0x1f4);},0x157c);},0x7d0);},0x5dc);},(_0x228658,_0x192ba9,_0x5c4262)=>{const _0x36512e=_0x27816a;$('#textLoading3Dcar')[_0x36512e(0x236)](_0x36512e(0x1fc)+(_0x192ba9/_0x5c4262*0x64)[_0x36512e(0x228)](0x0)+'%');});loadingManagerModel[_0x27816a(0x221)]=function(_0x10906c){const _0x1574a6=_0x27816a;$(_0x1574a6(0x21b))[_0x1574a6(0x236)](_0x1574a6(0x266));};const canvas=document[_0x27816a(0x211)](_0x27816a(0x255)),scene=new _0x392eee[(_0x27816a(0x22f))]();scene[_0x27816a(0x24c)]=new _0x392eee[(_0x27816a(0x214))](0xffffff);const updateAllMaterials=()=>{const _0x2e8f1d=_0x27816a;scene[_0x2e8f1d(0x202)](_0xe4ceb8=>{const _0x531119=_0x2e8f1d;_0xe4ceb8 instanceof _0x392eee[_0x531119(0x258)]&&_0xe4ceb8['material']instanceof _0x392eee[_0x531119(0x259)]&&(_0xe4ceb8[_0x531119(0x232)][_0x531119(0x1f4)]=environmentMap,_0xe4ceb8[_0x531119(0x232)][_0x531119(0x250)]=!![],_0xe4ceb8[_0x531119(0x1f8)]=!![],_0xe4ceb8[_0x531119(0x21d)]=!![]);});},cubeTextureLoader=new _0x392eee[(_0x27816a(0x247))](loadingManagerModel),environmentMap=cubeTextureLoader[_0x27816a(0x204)]([_0x27816a(0x233),_0x27816a(0x25a),_0x27816a(0x229),_0x27816a(0x1fb),_0x27816a(0x246),_0x27816a(0x1fd)]);environmentMap[_0x27816a(0x261)]=_0x392eee['sRGBEncoding'],scene['environment']=environmentMap;const sizes={'width':window[_0x27816a(0x21e)],'height':window[_0x27816a(0x203)]};window[_0x27816a(0x1f3)]('resize',()=>{const _0x236cda=_0x27816a;sizes[_0x236cda(0x242)]=window[_0x236cda(0x21e)],sizes[_0x236cda(0x224)]=window[_0x236cda(0x203)],camera[_0x236cda(0x24f)]=sizes[_0x236cda(0x242)]/sizes['height'],camera[_0x236cda(0x24a)](),renderer[_0x236cda(0x23d)](sizes['width'],sizes[_0x236cda(0x224)]),renderer[_0x236cda(0x235)](Math[_0x236cda(0x249)](window[_0x236cda(0x217)],0x2));});const axesHelper=new _0x392eee[(_0x27816a(0x22a))](0xa),camera=new _0x392eee['PerspectiveCamera'](0x28,sizes[_0x27816a(0x242)]/sizes[_0x27816a(0x224)],0.1,0x3e8),camerahelper=new _0x392eee[(_0x27816a(0x25d))](camera);camera['position'][_0x27816a(0x251)](configurations['camera'][_0x27816a(0x1fe)]['x'],configurations[_0x27816a(0x208)][_0x27816a(0x1fe)]['y'],configurations['camera']['default']['z']),scene['add'](camera);const moveCameraDefault=(_0x1da860,_0x50d4e8)=>{const _0x52851c=_0x27816a;gsap['to'](camera[_0x52851c(0x237)],{'duration':_0x1da860,'ease':_0x50d4e8,'x':configurations[_0x52851c(0x208)]['to']['x'],'y':configurations[_0x52851c(0x208)]['to']['y'],'z':configurations[_0x52851c(0x208)]['to']['z'],'onUpdate':function(){camera['updateProjectionMatrix'](),controls['update']();}}),gsap['to'](controls[_0x52851c(0x20d)],{'duration':0x2,'ease':_0x52851c(0x22b),'x':configurations['camera'][_0x52851c(0x20d)]['x'],'y':configurations[_0x52851c(0x208)][_0x52851c(0x20d)]['y'],'z':configurations[_0x52851c(0x208)][_0x52851c(0x20d)]['z'],'onUpdate':function(){const _0x237d7d=_0x52851c;camera[_0x237d7d(0x24a)](),controls['update']();}});},controls=new OrbitControls(camera,canvas);controls['enablePan']=![],controls[_0x27816a(0x20f)]=![],controls['enableDamping']=![],controls[_0x27816a(0x21a)]=![],controls[_0x27816a(0x201)]=configurations['camera']['zoom'][_0x27816a(0x1fe)][_0x27816a(0x249)],controls['maxDistance']=configurations['camera']['zoom'][_0x27816a(0x1fe)][_0x27816a(0x22c)],controls[_0x27816a(0x20d)]['set'](configurations[_0x27816a(0x208)][_0x27816a(0x20d)]['x'],configurations[_0x27816a(0x208)][_0x27816a(0x20d)]['y'],configurations[_0x27816a(0x208)][_0x27816a(0x20d)]['z']),controls['minPolarAngle']=0x0,controls['maxPolarAngle']=Math['PI']/0x2-0.1;const renderer=new _0x392eee[(_0x27816a(0x22e))]({'canvas':canvas,'antialias':!![]});renderer[_0x27816a(0x265)]=!![],renderer[_0x27816a(0x21c)]=_0x392eee['sRGBEncoding'],renderer['shadowMap'][_0x27816a(0x24e)]=!![],renderer[_0x27816a(0x23d)](sizes[_0x27816a(0x242)],sizes['height']),renderer[_0x27816a(0x235)](window[_0x27816a(0x217)]);var ambientLight=new _0x392eee[(_0x27816a(0x20a))](0x0,0.9);scene['add'](ambientLight);const dirLightRight=new _0x392eee[(_0x27816a(0x205))](0xffffff,0x1),dirLightRightHelper=new _0x392eee['DirectionalLightHelper'](dirLightRight);dirLightRight[_0x27816a(0x237)][_0x27816a(0x251)](0x20,0x30,0xa),dirLightRight['target'][_0x27816a(0x237)][_0x27816a(0x251)](-0x1,-0x2,0x0),dirLightRight[_0x27816a(0x20e)]=0x3,dirLightRight[_0x27816a(0x1f8)]=![],scene[_0x27816a(0x252)](dirLightRight),scene[_0x27816a(0x252)](dirLightRight[_0x27816a(0x20d)]);const dirLightRightSide=new _0x392eee[(_0x27816a(0x205))](0xffffff,0x1),dirLightRightSideHelper=new _0x392eee[(_0x27816a(0x230))](dirLightRightSide);dirLightRightSide['position'][_0x27816a(0x251)](0x78,-0x18,0x3),dirLightRightSide[_0x27816a(0x20d)][_0x27816a(0x237)][_0x27816a(0x251)](-0xa,0x0,0x0),dirLightRightSide[_0x27816a(0x20e)]=0.7,dirLightRightSide[_0x27816a(0x1f8)]=![],scene[_0x27816a(0x252)](dirLightRightSide),scene[_0x27816a(0x252)](dirLightRightSide[_0x27816a(0x20d)]);const dirLightLeft=new _0x392eee[(_0x27816a(0x205))](0xffffff,0x1),dirLightLeftHelper=new _0x392eee[(_0x27816a(0x230))](dirLightLeft);dirLightLeft[_0x27816a(0x237)][_0x27816a(0x251)](-0x20,0x30,0xa),dirLightLeft[_0x27816a(0x20d)][_0x27816a(0x237)]['set'](0x1,-0x2,0x0),dirLightLeft[_0x27816a(0x20e)]=0x3,dirLightLeft['castShadow']=![],scene['add'](dirLightLeft),scene[_0x27816a(0x252)](dirLightLeft[_0x27816a(0x20d)]),scene['add'](dirLightLeftHelper);const dirLightLeftSide=new _0x392eee['DirectionalLight'](0xffffff,0x1),dirLightLeftSideHelper=new _0x392eee[(_0x27816a(0x230))](dirLightLeftSide);dirLightLeftSide[_0x27816a(0x237)][_0x27816a(0x251)](-0x78,-0x18,0x3),dirLightLeftSide[_0x27816a(0x20d)][_0x27816a(0x237)]['set'](0xa,0x0,0x0),dirLightLeftSide[_0x27816a(0x20e)]=0.7,dirLightLeftSide[_0x27816a(0x1f8)]=![],scene[_0x27816a(0x252)](dirLightLeftSide),scene[_0x27816a(0x252)](dirLightLeftSide[_0x27816a(0x20d)]);const dirLightFront=new _0x392eee[(_0x27816a(0x205))](0xffffff,0x1),dirLightFrontHelper=new _0x392eee['DirectionalLightHelper'](dirLightFront);dirLightFront['position']['set'](0x0,0x1c,-0x46),dirLightFront[_0x27816a(0x20d)]['position'][_0x27816a(0x251)](0x0,-0xa,0x12),dirLightFront[_0x27816a(0x20e)]=0x3,dirLightFront[_0x27816a(0x1f8)]=![],scene[_0x27816a(0x252)](dirLightFront),scene[_0x27816a(0x252)](dirLightFront[_0x27816a(0x20d)]);const spotLight=new _0x392eee[(_0x27816a(0x25c))](0xffffff,0xf,0x5dc),spotLightHelper=new _0x392eee[(_0x27816a(0x267))](spotLight);spotLight[_0x27816a(0x237)]['set'](0x0,65.3,0x0),spotLight[_0x27816a(0x210)]=0x1,spotLight['penumbra']=0x1,spotLight[_0x27816a(0x212)][_0x27816a(0x215)][_0x27816a(0x242)]=0x400,spotLight[_0x27816a(0x212)][_0x27816a(0x215)][_0x27816a(0x224)]=0x400,scene[_0x27816a(0x252)](spotLight),scene[_0x27816a(0x252)](spotLight[_0x27816a(0x20d)]);const shadowT=new _0x392eee['TextureLoader'](loadingManagerModel)['load'](configurations[_0x27816a(0x260)][_0x27816a(0x212)][_0x27816a(0x23c)]),shadowG=new _0x392eee[(_0x27816a(0x23e))](configurations[_0x27816a(0x260)]['shadow'][_0x27816a(0x262)][_0x27816a(0x248)],configurations['model'][_0x27816a(0x212)][_0x27816a(0x262)]['height']),shadowM=new _0x392eee[(_0x27816a(0x219))]({'map':shadowT,'transparent':!![],'opacity':configurations[_0x27816a(0x260)][_0x27816a(0x212)][_0x27816a(0x213)]}),shadow=new _0x392eee['Mesh'](shadowG,shadowM);shadow[_0x27816a(0x256)]['x']=configurations[_0x27816a(0x260)]['shadow']['rotation']['x'],shadow[_0x27816a(0x256)]['y']=configurations[_0x27816a(0x260)][_0x27816a(0x212)][_0x27816a(0x256)]['y'],shadow[_0x27816a(0x256)]['z']=configurations[_0x27816a(0x260)][_0x27816a(0x212)]['rotation']['z'],shadow[_0x27816a(0x237)]['y']=configurations[_0x27816a(0x260)]['shadow'][_0x27816a(0x237)]['y'],shadow[_0x27816a(0x237)]['z']=configurations[_0x27816a(0x260)]['shadow']['position']['z'];const floor=new _0x392eee['Mesh'](new _0x392eee['PlaneBufferGeometry'](0x1f4,0x1f4),new _0x392eee[(_0x27816a(0x219))]({'color':0xffffff}));floor[_0x27816a(0x256)]['x']=-Math['PI']*0.5,floor['position']['y']=-0x2,floor[_0x27816a(0x21d)]=!![];const loader=new GLTFLoader(loadingManagerModel),dracoLoader=new DRACOLoader(loadingManagerModel);dracoLoader[_0x27816a(0x24d)](_0x27816a(0x240)),dracoLoader[_0x27816a(0x1f5)](),loader[_0x27816a(0x1ff)](dracoLoader),loader[_0x27816a(0x204)](configurations[_0x27816a(0x260)][_0x27816a(0x206)][0x0][_0x27816a(0x23c)],_0x3029d1=>{const _0x3ad33e=_0x27816a;car1=_0x3029d1['scene'],car1[_0x3ad33e(0x231)]['set'](configurations[_0x3ad33e(0x260)][_0x3ad33e(0x206)][0x0][_0x3ad33e(0x231)],configurations[_0x3ad33e(0x260)]['car'][0x0][_0x3ad33e(0x231)],configurations['model'][_0x3ad33e(0x206)][0x0][_0x3ad33e(0x231)]),car1[_0x3ad33e(0x237)]['x']=configurations[_0x3ad33e(0x260)]['car'][0x0][_0x3ad33e(0x237)]['x'],car1[_0x3ad33e(0x237)]['y']=configurations['model'][_0x3ad33e(0x206)][0x0][_0x3ad33e(0x237)]['y'],car1[_0x3ad33e(0x237)]['z']=configurations[_0x3ad33e(0x260)][_0x3ad33e(0x206)][0x0]['position']['z'],carDefault==0x1&&(car1[_0x3ad33e(0x220)]=![]),scene[_0x3ad33e(0x252)](car1),updateAllMaterials();},null,_0x5ab5fd=>{const _0x1eb590=_0x27816a;console[_0x1eb590(0x243)](_0x5ab5fd);}),loader[_0x27816a(0x204)](configurations[_0x27816a(0x260)]['car'][0x1][_0x27816a(0x23c)],_0x5e38ba=>{const _0x5b05ed=_0x27816a;car2=_0x5e38ba[_0x5b05ed(0x22d)],car2[_0x5b05ed(0x231)][_0x5b05ed(0x251)](configurations[_0x5b05ed(0x260)]['car'][0x1][_0x5b05ed(0x231)],configurations['model'][_0x5b05ed(0x206)][0x1][_0x5b05ed(0x231)],configurations[_0x5b05ed(0x260)][_0x5b05ed(0x206)][0x1]['scale']),car2['position']['x']=configurations[_0x5b05ed(0x260)]['car'][0x1][_0x5b05ed(0x237)]['x'],car2[_0x5b05ed(0x237)]['y']=configurations[_0x5b05ed(0x260)]['car'][0x1][_0x5b05ed(0x237)]['y'],car2[_0x5b05ed(0x237)]['z']=configurations[_0x5b05ed(0x260)][_0x5b05ed(0x206)][0x1][_0x5b05ed(0x237)]['z'],carDefault==0x0&&(car2[_0x5b05ed(0x220)]=![]),scene[_0x5b05ed(0x252)](car2),updateAllMaterials();},null,_0x229541=>{const _0x589040=_0x27816a;console[_0x589040(0x243)](_0x229541);});const tick=()=>{const _0x58a3f2=_0x27816a;controls[_0x58a3f2(0x20c)](),renderer['render'](scene,camera),window[_0x58a3f2(0x1f9)](tick);};tick();