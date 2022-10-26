var camera, scene, renderer, geometry, material, mesh, composer, filmPass;

init();
animate();

function init() {
  clock = new THREE.Clock();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 1000;
  scene.add(camera);

  geometry = new THREE.CubeGeometry(100, 100, 100);
  material = new THREE.MeshLambertMaterial({
    color: 0xaa6666,
    wireframe: false,
  });
  mesh = new THREE.Mesh(geometry, material);
  //scene.add( mesh );
  cubeSineDriver = 0;
  /*
    textGeo = new THREE.PlaneGeometry(300,300);
    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
    textMaterial = new THREE.MeshLambertMaterial({color: 0x00ffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    text = new THREE.Mesh(textGeo,textMaterial);
    text.position.z = 800;
    scene.add(text);
    **/

  light = new THREE.DirectionalLight(0xffffff, 0.5);
  light.position.set(-1, 0, 1);
  scene.add(light);

  smokeTexture = THREE.ImageUtils.loadTexture(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
  );
  smokeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color("rgb(212, 212, 214)"),
    map: smokeTexture,
    transparent: true,
  });
  smokeGeo = new THREE.PlaneGeometry(200, 200);
  smokeParticles = [];

  for (p = 0; p < 70; p++) {
    var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    particle.position.set(
      Math.random() * 300 - 150,
      Math.random() * 200 - 100,
      Math.random() * 1000 - 50
    );
    particle.rotation.z = Math.random() * 360;
    scene.add(particle);
    smokeParticles.push(particle);
  }
  const viewer = document.getElementById("hologram");
  viewer.appendChild(renderer.domElement);

  // Film pass
  filmPass = new THREE.ShaderPass(THREE.FilmShader);
  filmPass.uniforms.sCount.value = 0;
  filmPass.uniforms.grayscale.value = false;
  filmPass.uniforms.sIntensity.value = 0;
  filmPass.uniforms.nIntensity.value = 2;

  //  // Main Composer
  var renderPass = new THREE.RenderPass(scene, camera);

  var copyPass = new THREE.ShaderPass(THREE.CopyShader);

  composer = new THREE.EffectComposer(renderer);
  composer.addPass(renderPass);
  composer.addPass(filmPass);
  composer.addPass(copyPass);

  copyPass.renderToScreen = true;
}

function animate() {
  // note: three.js includes requestAnimationFrame shim
  delta = clock.getDelta();
  requestAnimationFrame(animate);
  evolveSmoke();
  render();
}

function evolveSmoke() {
  var sp = smokeParticles.length;
  while (sp--) {
    smokeParticles[sp].rotation.z += delta * 0.2;
  }
}
var shaderTime;
function render() {
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  cubeSineDriver += 0.01;
  mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
  shaderTime += 0.1;
  //filmPass.uniforms['time'].value = shaderTime;
  //
  composer.render(0.01);
  //
}
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}