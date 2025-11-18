import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(7, 7);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xcccccc
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

// cube 1
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
geometry1.translate(0, 0, 0.5);
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

// cube 2
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
geometry2.translate(2, 0, 0.5);
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube2);

// cube 3
const geometry3 = new THREE.BoxGeometry(1, 1, 1);
geometry3.translate(4, 0, 0.5);
const material3 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube3 = new THREE.Mesh(geometry3, material3);
scene.add(cube3);


camera.position.z = 5;
camera.position.y = 7;
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

function animate() {
  renderer.render(scene, camera);
}
