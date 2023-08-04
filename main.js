// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// // import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
// // import Stats from 'three/addons/libs/stats.module.js';
// import * as dat from 'dat.gui';

// // camera also

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// //back ground color 
// renderer.setClearColor(new THREE.Color(0xe1e1ea));
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );


// //light


// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(50, 70, 20);
// scene.add(directionalLight);


// // const ambientlight =new THREE.AmbientLight(0x505050,5)
// // scene.add(ambientlight)


// // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
// // scene.add(directionalLightHelper)

// // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // // to change the cube to wireframe mode after color type , wireframe:true
// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );
// // cube.position.set(1,4,4);

// //dat gui panel

// const gui =new dat.GUI();
// const options ={
// 	cubeColor : '#ffea00'
// };

// gui.addColor(options, 'cubeColor').onChange(function(e){
// 	cube.material.color.set(e)
// });




// //loaders

// let mixer ;


// const loader = new GLTFLoader();
// loader.load( '/house/poto.gltf', function ( gltf ) {
// 	const model = gltf.scene ;
// 	scene.add(model );
// 	// model.scale.set(0.5,0.5,0.5);
// 	// model.rotation.x = 400;
// 	// mixer = new THREE.AnimationMixer(model);
// 	// const clips =gltf.animation;
// 	// const clip = THREE.AnimationClip.findByName(clips ,'HeadAction');
// 	// const action = mixer.clipAction(clip);
// 	action.play();
// 	clips.forEach(function(clip) {
// 	const action = mixer.clipAction(clip);
// 	action.play();
// 	});


	
// }, undefined, function ( error ) {
// 	console.error( error );

// } );



// //camera

// camera.position.set(4, 4, 4);
// // camera.position.z = 5;
// const controls = new OrbitControls( camera, renderer.domElement );
// controls.panspeed =1;
// controls.rotationspeed = 5 ;
// controls.maxDistance =10;
// //controls.enabelPan = false;
// // controls.enableDamping = true;
// // controls.dampingFactor= 0.2;
// camera.position.set(0,6,6);
// camera.lookAt(scene.position);



// //animation


// // const clock = new THREE.Clock();

// function animate() {
// 	requestAnimationFrame( animate );
// 	controls.update();
// 	renderer.render( scene, camera );
// 	mixer.update(clock.getDelta());
// 	// cube.rotation.x += 0.01;
// 	// cube.rotation.y += 0.01;
	
// }
// animate();






// //plane

// const PlaneGeometry =new THREE.PlaneGeometry (30,30);
// const planeMaterial = new THREE.MeshBasicMaterial({color:0xFFFFFF 
// 	,side : THREE.DoubleSide });
// 	// remove 3 double side if u want to see throw walls
// const plane = new THREE.Mesh(PlaneGeometry,planeMaterial);
// scene.add(plane);
// plane.rotation.x = -0.5* Math.PI;



// 	// grid

// 	const grid = new THREE.GridHelper( 40);
// 	// grid helper (40 to scale the grid, 100 to increase number of squares)
// 	scene.add( grid );



// 	//window resizing

// 	window.addEventListener('resize', function() {
// 		camera.aspect = window.innerWidth / window.innerHeight;
// 		camera.updateProjectionMatrix();
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 	});
























// import * as THREE from 'three';



// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';

// let camera, scene, renderer, stats;

// const clock = new THREE.Clock();

// let mixer;

// init();
// animate();

// function init() {

// 	const container = document.createElement( 'div' );
// 	document.body.appendChild( container );

// 	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
// 	camera.position.set( 100, 200, 300 );

// 	scene = new THREE.Scene();
// 	scene.background = new THREE.Color( 0xa0a0a0 );
// 	// scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

// 	const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 5 );
// 	hemiLight.position.set( 0, 200, 0 );
// 	scene.add( hemiLight );

// 	const dirLight = new THREE.DirectionalLight( 0xffffff, 5 );
// 	dirLight.position.set( 0, 200, 100 );
// 	dirLight.castShadow = true;
// 	dirLight.shadow.camera.top = 180;
// 	dirLight.shadow.camera.bottom = - 100;
// 	dirLight.shadow.camera.left = - 120;
// 	dirLight.shadow.camera.right = 120;
// 	scene.add( dirLight );

// 	// scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

// 	// ground
// 	const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
// 	mesh.rotation.x = - Math.PI / 2;
// 	mesh.receiveShadow = true;
// 	scene.add( mesh );

// 	const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
// 	grid.material.opacity = 0.2;
// 	grid.material.transparent = true;
// 	scene.add( grid );

// 	// model
	

// 	const loader = new FBXLoader();
// 	loader.load( '/house/jjjjjjjjjjj.fbx', function ( object ) {
		
// 		const model =object.scene ;
// 		scene.add(model );
// 		//  model.rotation.set (2,2,2)
// 		mixer = new THREE.AnimationMixer( object );

// 		const action = mixer.clipAction( object.animations[ 0 ] );
// 		action.play();

// 		object.traverse( function ( child ) {

// 			if ( child.isMesh ) {

// 				child.castShadow = true;
// 				child.receiveShadow = true;

// 			}

// 		} );

// 		scene.add( object );

// 	} );

// 	renderer = new THREE.WebGLRenderer( { antialias: true } );
// 	renderer.setPixelRatio( window.devicePixelRatio );
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// 	renderer.shadowMap.enabled = true;
// 	container.appendChild( renderer.domElement );

// 	const controls = new OrbitControls( camera, renderer.domElement );
// 	controls.target.set( 0, 100, 0 );
// 	controls.update();

// 	window.addEventListener( 'resize', onWindowResize );

// 	// stats
// 	stats = new Stats();
// 	container.appendChild( stats.dom );

// }

// function onWindowResize() {

// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();

// 	renderer.setSize( window.innerWidth, window.innerHeight );

// }

// //

// function animate() {

// 	requestAnimationFrame( animate );

// 	const delta = clock.getDelta();

// 	if ( mixer ) mixer.update( delta );

// 	renderer.render( scene, camera );

// 	stats.update();

// }


































import * as THREE from 'three';
import { GUI } from 'dat.gui'
import { Mesh, AnimationMixer } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import * as dat from 'dat.gui';
import { ShadowMapViewer } from 'three/addons/utils/ShadowMapViewer.js';


const monkeyUrl = new URL('/house/Vanguard By T. Choonyung.fbx', import.meta.url);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45,
window.innerWidth / window.innerHeight,
    0.1,
    1000
);
//world color
renderer.setClearColor(0xA3A3A3);
renderer.shadowMap.enabled = true;
const orbit = new OrbitControls(camera, renderer.domElement);

// light

const ambientlight =new THREE.AmbientLight(0xffffff,0.5)
scene.add(ambientlight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
directionalLight.position.set(50, 70, 20);
directionalLight.castShadow = true ;
scene.add(directionalLight);


//Hemisphere
// var light = new THREE.HemisphereLight(0xf6e86d, 0x404040, 1);
// scene.add(light);




// const spotLight = new THREE.SpotLight(0xFFFFFF);
// scene.add(spotLight);
// spotLight.position.set(-100, 100, 0);
// spotLight.castShadow = true;
// spotLight.intensity =1.2;
// spotLight.angle = 0.2;
// spotLight.penumbra =0.3

// spotLight.shadow.mapSize.width = 1024;
// spotLight.shadow.mapSize.height = 1024 ;
// spotLight.shadow.camera.near = 5;
// spotLight.shadow.camera.far = 10;
// spotLight.shadow.focus = 1 ;

// const sLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(sLightHelper);

// const planeGeo = new THREE.PlaneGeometry(100, 100);

// const planeMat= new THREE.MeshPhongMaterial({
//     color: 0xFFFFFF,
//     side: THREE.DoubleSide ,
//     dithering:true
// });
// const plane = new THREE.Mesh(planeGeo, planeMat);
// scene.add(plane);
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true;

// gui

const gui =new dat.GUI();


// camera

camera.position.set(10, 10, 10);
orbit.update();
// grid

const grid = new THREE.GridHelper(30, 30);
scene.add(grid);


//loaders

// const assetLoader = new GLTFLoader();
const assetLoader = new FBXLoader();
let mixer;
assetLoader.load(monkeyUrl.href, function(object) {
	
    const model = object.scene;
    scene.add(model);
    mixer = new THREE.AnimationMixer(model);
    const clips = object.animations;
    // model.position.set(1,3,1);

    // model.castShadow = true ;
    // model.traverse(function(node) {
    //     if(node.isMesh)
    //     node.castShadow = true ;
    // });
    //in fbx use these below

	scene.add( object );
	// object.rotation.set (4.7,0,0)
	object.scale.set(0.01,0.01,0.01 )
;
    // Play a certain animation
    // const clip = THREE.AnimationClip.findByName(clips, 'HeadAction');
    // const action = mixer.clipAction(clip);
    // action.play();

    // Play all animations at the same time
    clips.forEach(function(clip) {
        const action = mixer.clipAction(clip);
        action.play();
    });
	
}, undefined, function(error) {
    console.error(error);
});

//animation

const clock = new THREE.Clock();
function animate() {
    if(mixer)
        mixer.update(clock.getDelta());
		
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

//window resize

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});




// //plane

// const PlaneGeometry =new THREE.PlaneGeometry (100,100);
// const planeMaterial = new THREE.MeshPhongMaterial({color:0xFFFFFF 
// 	,side : THREE.DoubleSide,  dithering:true });
// 	// remove 3 double side if u want to see throw walls
// const plane = new THREE.Mesh(PlaneGeometry,planeMaterial);
// scene.add(plane);
// plane.rotation.x = -0.5* Math.PI;












