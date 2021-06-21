---
layout: post
section-type: post
title: Working With 3D models
category: tech
custom_code: <link rel="stylesheet" href="https://www.cssscript.com/demo/gallery-lightbox-mk/mklb/css/mklb.css"/><link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/><script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
custom_code_file : leafletcss.html
tags: [ 'games' ]
---
<div id="info">
			<a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> -
			<a href="http://3mf.io" target="_blank" rel="noopener">3MF</a> file with materials
		</div>
<div id="canvas"></div>


<div id="scene3d"></canvas>


<script type="module">

			import * as THREE from '../build/three.module.js';

			import { OrbitControls } from './jsm/controls/OrbitControls.js';
			import { ThreeMFLoader } from './jsm/loaders/3MFLoader.js';

			let camera, scene, renderer;

			init();

			function init() {

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xa0a0a0 );
				scene.fog = new THREE.Fog( 0xa0a0a0, 10, 500 );

				camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 500 );
				camera.position.set( - 50, 40, 50 );
				scene.add( camera );

				//

				const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
				hemiLight.position.set( 0, 100, 0 );
				scene.add( hemiLight );

				const dirLight = new THREE.DirectionalLight( 0xffffff );
				dirLight.position.set( - 0, 40, 50 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 50;
				dirLight.shadow.camera.bottom = - 25;
				dirLight.shadow.camera.left = - 25;
				dirLight.shadow.camera.right = 25;
				dirLight.shadow.camera.near = 0.1;
				dirLight.shadow.camera.far = 200;
				dirLight.shadow.mapSize.set( 1024, 1024 );
				scene.add( dirLight );

				// scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

				//

				const manager = new THREE.LoadingManager();

				const loader = new ThreeMFLoader( manager );
				loader.load( './models/3mf/truck.3mf', function ( object ) {

					object.quaternion.setFromEuler( new THREE.Euler( - Math.PI / 2, 0, 0 ) ); 	// z-up conversion

					object.traverse( function ( child ) {

						child.castShadow = true;

					} );

					scene.add( object );

				} );

				//

				manager.onLoad = function () {

					render();

				};

				//

				const ground = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
				ground.rotation.x = - Math.PI / 2;
				ground.position.y = 11;
				ground.receiveShadow = true;
				scene.add( ground );

				//

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.outputEncoding = THREE.sRGBEncoding;
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;
				document.body.appendChild( renderer.domElement );

				//

				const controls = new OrbitControls( camera, renderer.domElement );
				controls.addEventListener( 'change', render );
				controls.minDistance = 50;
				controls.maxDistance = 200;
				controls.enablePan = false;
				controls.target.set( 0, 20, 0 );
				controls.update();

				window.addEventListener( 'resize', onWindowResize );

				render();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function render() {

				renderer.render( scene, camera );

			}

		</script>
