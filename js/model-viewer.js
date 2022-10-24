const model = document.getElementById(model-earth); //el modelo 3d

//inicializar
let width, height, scale;
//funcion
function FillScreen() {
  width = window.innerWidth / canvas.width;
  height = window.innerHeight / canvas.height;
  scale = Math.min(h, w);
  
  canvas.style.width = (canvas.width * scale) + 'px';
            canvas.style.height = (canvas.height * scale) + 'px';
}