const search = document.getElementById('search-bar');//esta es la barra de busqueda
const searchButtom = document.getElementById('search-buttom'); //el boton de busqueda
//aplicar estilo al tocar
function onTouchSearch(){
    search.style.display = 'block';
    search.style.visibility = 'visible';
}

 searchButtom.addEventListener('click', onTouchSearch);