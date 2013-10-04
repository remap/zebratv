var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//scene.add(cube);

camera.position.z = 5;

var render = function () {
	requestAnimationFrame(render);

	//cube.rotation.x += 0.005;
//	cube.rotation.y += 0.001;

    // update sensor tags
    //scene.getObjectByName()

        
    for (sensor in sensors){
        geo = scene.getObjectByName(sensors[sensor].name)
       // log(geo)
        geo.position.x = sensors[sensor].x/20
        geo.position.y = sensors[sensor].y/20
        geo.position.z = sensors[sensor].z/20
        //log("set to "+geo.x)
    }
    
    //elem[id] = {'x':x,'y':y,'z':z}
    //log("elem length is "+Object.keys(elem).length)
    //log("x is "+elem[id]['x'])

	renderer.render(scene, camera);
	
};

render();



var addElement = function(id){
    var geometry = new THREE.CubeGeometry(.25,.25,.25);
    var material = new THREE.MeshBasicMaterial({color: '#'+Math.floor(Math.random()*16777215).toString(16)});
    var tmpMesh = new THREE.Mesh(geometry, material);
    tmpMesh.name = id;
    scene.add(tmpMesh);
}