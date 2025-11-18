import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.10,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(7, 7);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0x666666,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry,
  planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// cube 1
const geometry1 = new THREE.BoxGeometry(2, 2, 2);
geometry1.translate(0, 0, 0.5);
const material1 = new THREE.MeshPhongMaterial({
  color: 0x7ed1f7, shininess: 100,
  specular: 0xffffff
});
const cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

// cube 2
const geometry2 = new THREE.BoxGeometry(1.25, 1.25, 1.25);
geometry2.translate(2, 0, 0.5);
const material2 = new THREE.MeshPhongMaterial({
  color: 0xd1f263, shininess: 100,
  specular: 0xffffff
});
const cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube2);

// cube 3
const geometry3 = new THREE.BoxGeometry(1.75, 1.75, 1.75);
geometry3.translate(3, 0, 0.8);
const material3 = new THREE.MeshPhongMaterial({
  color: 0xd955ed, shininess: 100,
  specular: 0xffffff
});
const cube3 = new THREE.Mesh(geometry3, material3);
scene.add(cube3);

// cube 4
const geometry4 = new THREE.BoxGeometry(2.25, 2.25, 2.25);
geometry4.translate(4, 0, 0.8);
const material4 = new THREE.MeshPhongMaterial({ color: 0xf2527d });
const cube4 = new THREE.Mesh(geometry4, material4);
scene.add(cube4);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(7, 7, 5);
scene.add(directionalLight);

camera.position.x = 10;
camera.position.y = 12;
camera.lookAt(0, 0, 0.5);

function animate() {
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  cube2.rotation.z += 0.02;

  cube3.rotation.x += 0.005;
  cube3.rotation.y += 0.015;

  cube4.rotation.z += 0.005;


  renderer.render(scene, camera);
}
