//SE ENCARGA DE LA RESOLUCION DINAMICA DEL VIZOR DEL MODELO
//ajuista el modeo al ancho de la pantalla para que se mantenga en su lugar y redusca uso del gpu

const model = document.getElementById("model-conteiner"); //el modelo 3d
const modelViewer = document.querySelector("model-viewer#model-earth"); //el modelo 3d

//inicializar
let width, height, scale, newHeight, newWidth;
//funcion
//ajusta el modelo a la pantalla
function FillScreen() {
  //obtener la resolucion actual
  width = window.innerWidth / model.clientWidth;
  height = window.innerHeight / model.clientHeight;
  //calcular [aspect ratio]
  scale = Math.min(height, width);

  //asignar nueva escala
  newWidth = model.clientWidth * scale + "px";
  //resolucion actual *15%
  newHeight = model.clientHeight - (model.clientHeight*0.15) + "px";
  model.style.width =newWidth;
  model.style.height = newHeight;
  //debug

  console.log("La resolucion es: [" + newWidth + " X " + newHeight + "]");
}

window.addEventListener("resize", FillScreen);
window.addEventListener("load", FillScreen);
