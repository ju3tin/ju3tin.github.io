import * as THREE from '/build/three.module.js';
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';
import {BVHLoader} from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/BVHLoader.js';
import Stats from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/libs/stats.module.js';
import * as SkeletonUtils from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/utils/SkeletonUtils.js';

const fileInput = document.getElementById('fileInput');
const openBtn = document.getElementById('openBtn');
const animBtn = document.getElementById('animBtn');

function listAnimation(name) {
  const option = document.createElement('option');
  option.value = name;
  option.innerText = name;
  animBtn.appendChild(option);
}

function init() {

 
  ////////////////////     three "boilerplate"    /////////////////////////

  const clock = new THREE.Clock();
  const container = document.getElementById('container');

  const stats = new Stats();
  container.appendChild(stats.dom);
 
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100000);
  camera.position.set(0, 30, 160);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 30, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(-10, 20, 100);
  scene.add(dirLight);

  const ambLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambLight);

  ///////////////////         end boilerplate        //////////////////////

  let mixer, model, currentAction, skeletonHelper;
  const animationActions = {};
  const crossFadeTime = 0.2;

  function setupAnimation(result, model, clipName) {
    const newClip = retargetBVH(result, model);
    const animAction = mixer.clipAction(newClip);
    animationActions[clipName] = animAction;
    listAnimation(clipName);
  }

  function retargetBVH(BVHLoaderResult, model) {

    const clip = BVHLoaderResult.clip;
    const skeleton = BVHLoaderResult.skeleton;
    /* find model's weighted skeleton and give the model a pointer to it */
    if (!model.skeleton) {
      model.traverse((child) => {
        if (child.skeleton) {
          model.skeleton = child.skeleton;
        }
      });
    }

    // *Special Note* SkeletonUtils.retargetClip seems to output an animationClip
    // with more frames (time arrays) than necessary and a reduced duration.
    // I'm supplying fps and modifying input clip duration to fix that

    /* get fps from first track. */
    const fps = 1 / clip.tracks[0].times[1] || 1;
    clip.duration += 1 / fps;

    const options = {
      fps: fps,
    };

    const newClip = SkeletonUtils.retargetClip(model, skeleton, clip, options);

    /* can dispose of bvhLoader skeleton */
    skeleton.dispose();

    /* THREE.SkinnedMesh.pose() to reset the model */
    model.traverse(function(child) {
      if (child.type === "SkinnedMesh") {
        child.pose();
      }
    });

    return newClip;
  }

  const gltfLoader = new GLTFLoader();
  const bvhLoader = new BVHLoader();
  const path = '';
  
  gltfLoader.load(path + '/assets/glb/humanoid.glb', (gltf) => {
    model = gltf.scene;
    scene.add(model);

    
    mixer = new THREE.AnimationMixer(model);

    bvhLoader.load(path + '/animations/avatar_walk.bvh', (result) => {
      setupAnimation(result, model, 'avatar_walk');
    });

    bvhLoader.load(path + '/animations/avatar_laugh_short.bvh', (result) => {
        setupAnimation(result, model, 'avatar_laugh');
      });
      bvhLoader.load(path + '/animations/avatar_run.bvh', (result) => {
        setupAnimation(result, model, 'avatar_run');
      });

      bvhLoader.load(path + '/animations/avatar_idle.bvh', (result) => {
        setupAnimation(result, model, 'avatar_idle');
     });

          // Load the BVH animation
 
        
          bvhLoader.load( "/animations/avatar_idle.bvh", function( result, BVHLoaderResult ) {

          
			//	skeletonHelper = new THREE.SkeletonHelper( result.skeleton.bones[ 0 ] );
			//	skeletonHelper.skeleton = result.skeleton; // allow animation mixer to bind to SkeletonHelper directly

			//	var boneContainer = new THREE.Group();
			//	boneContainer.add( result.skeleton.bones[ 0 ] );

			//	scene.add( skeletonHelper );
			//	scene.add( boneContainer );
      /*
            skeletonHelper = new THREE.SkeletonHelper( result.skeleton.bones[ 0 ] );
            skeletonHelper.skeleton = result.skeleton; // allow animation mixer to bind to SkeletonHelper directly

            var boneContainer = new THREE.Group();
            boneContainer.add( result.skeleton.bones[ 0 ] );

            scene.add( skeletonHelper );
            scene.add( boneContainer );
*/
            // play animation
            /*

    const newClip = retargetBVH(result, model);
    const animAction = mixer.clipAction(newClip);
    animationActions[clipName] = animAction;

            */
   //         mixer = new THREE.AnimationMixer( skeletonHelper );
     //       mixer.clipAction( result.clip ).setEffectiveWeight( 1.0 ).play();

          } );
    animate();
  });

  
  fileInput.addEventListener('change', (evt) => {
    const fakePath = evt.target.value;
    const name = fakePath.substring(fakePath.lastIndexOf('\\') + 1, fakePath.lastIndexOf('.'));
    const file = evt.target.files[0];

    const reader = new window.FileReader();
    reader.onload = function parseBVH(loadedEvent) {
      const result = bvhLoader.parse(loadedEvent.target.result);
      setupAnimation(result, model, name);
    };

    reader.readAsText(file);
  });

  openBtn.addEventListener('click', (evt) => {
    fileInput.click();
  });

  animBtn.addEventListener('change', (evt) => {
    const action = animationActions[animBtn.value];
    action.reset();
    action.enabled = true;
    action.play();
    if (currentAction !== undefined) {
      currentAction.crossFadeTo(action, crossFadeTime, false);
    }
    currentAction = action;
  });

  function animate() {
    const delta = clock.getDelta();
    mixer.update(delta);
    controls.update();
    stats.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  window.onresize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("load", function(){
    // ....
    bvhLoader.load(path + '/animations/avatar_idle.bvh', (result) => {
      setupAnimation(result, model, 'avatar_idle1');
   });
    
    const action = animationActions[{avatar_idle1}];
        action.reset();
        action.enabled = true;
        action.play();
        if (currentAction !== undefined) {
          currentAction.crossFadeTo(action, crossFadeTime, false);
        }
        currentAction = action;
        
    console.log('eat dick');
    });

}

//const ersd = document.getElementById('animBtn');
//ersd.getElementsByTagName('option')[2].selected = true;
//ersd.options[country.selectedIndex].defaultSelected = true;


//var x = document.getElementById("animBtn").children[2];
//x.setAttribute("selected", "selected");
//const EL_country = document.querySelector('#animBtn');
//EL_country.value = 'avatar_idle';   // Set SELECT value to 'ID' ("Indonesia")
//EL_country.options[1].defaultSelected = 'selected'//; // Add Attribute selected to Option Element
async function myAsyncFunction() {
    console.log("Start of async function");
  

    // Simulate an asynchronous operation with a delay using Promise
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Async operation completed");
}


// Run the main function

    
init();
