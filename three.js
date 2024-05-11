let scene, camera, renderer;
function init() {
    // Create the scene
    scene = new THREE.Scene();

    // Create and position the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}
let cube;

function addCube() {
    // Create a cube geometry
    const geometry = new THREE.BoxGeometry();

    // Create a basic material with color
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color

    // Combine the geometry and material into a mesh
    cube = new THREE.Mesh(geometry, material);

    // Add the mesh to the scene
    scene.add(cube);
}
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

init();
addCube();
animate();
