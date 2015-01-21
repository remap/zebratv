var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.x = 2
camera.position.y = .75
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


camera.position.z = 5;

var render = function () {
	requestAnimationFrame(render);
        
    for (sensor in sensors){
        geo = scene.getObjectByName(sensors[sensor].name)
        geo.position.x = sensors[sensor].x/10
        geo.position.y = sensors[sensor].y/10
        geo.position.z = sensors[sensor].z/10
    }

	renderer.render(scene, camera);
	
};

render();


var addElement = function(id){
    var geometry = new THREE.CubeGeometry(.1,.1,.1);
    var material = new THREE.MeshBasicMaterial({color: '#'+Math.floor(Math.random()*16777215).toString(16)});
    var tmpMesh = new THREE.Mesh(geometry, material);
    tmpMesh.name = id;
    scene.add(tmpMesh);
}