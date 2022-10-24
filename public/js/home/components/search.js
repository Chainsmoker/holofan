const search = document.getElementById("search-bar"); //esta es la barra de busqueda
const searchButtom = document.getElementById("search-buttom"); //el boton de busqueda
let wasClick = false; //el boton fue presionado?;

//aplicar estilo al tocar
function onTouchSearch() {
  if (wasClick) {
    search.style.display = "none";
    search.style.visibility = "hidden";
    wasClick = !wasClick;
    console.log(wasClick + " fue escondido");
  } else {
    search.style.display = "block";
    search.style.visibility = "visible";
    wasClick = !wasClick;
    console.log(wasClick + " fue mostrado");
  }
}

searchButtom.addEventListener("click", onTouchSearch);
