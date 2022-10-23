
const textureLoader = new THREE.TextureLoader();
const smokeParticles = scene.smokeParticles = [];

  textureLoader.load('https://rawgit.com/marcobiedermann/playground/master/three.js/smoke-particles/dist/assets/images/clouds.png', texture => {
    const smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      map: texture,
      transparent: true
    });
    smokeMaterial.map.minFilter = THREE.LinearFilter;
    const smokeGeometry = new THREE.PlaneBufferGeometry(300, 300);

    const smokeMeshes = [];
    let limit = 150;

    while(limit--) {
      smokeMeshes[limit] = new THREE.Mesh(smokeGeometry, smokeMaterial);
      smokeMeshes[limit].position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
      smokeMeshes[limit].rotation.z = Math.random() * 360;
      smokeParticles.push(smokeMeshes[limit]);
      scene.add(smokeMeshes[limit]);
    }
  })