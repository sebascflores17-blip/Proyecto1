    let varGloval1 ="esta es una variable global";
    window.vTexto1="";




   function FCambioColor(){
     vTexto1 =document.getElementById("ejmDOM1");
vTexto1.innerText=" TExto cambiado por funcion FCambioColor()";
vTexto1.style.color="aqua";
vTexto1.style.backgroundColor="silver"
vTexto1.insertAdjacentHTML("afterend","texto adicional <br><br>");
console.log("Texto por consola");
}
   function FCambioClase1( ) {
    let vTexto2=document.getElementsByClassName("classDOM1");
    vTexto2[1].innerHTML="Elemento [1] del arreglo de la clase classDOM1";
    vTexto2[1].style.color= "silver";

    vTexto2[0].innerText="elemento [0] del arreglo" + 
                         "de claseDOM1 ; Concatenado con global:" + varGloval1;
                         "\n y su tipo de variable es : "+ typeof(varGloval1)
    vTexto2[2].innerHTML="tamaño del array=" + vTexto2.length + 
                           "\n y su tipo de variable es : "+ typeof(vTexto2)
  
   }
   function FCambioTag1() {
    let vTexto3=document.getElementsByTagName('h2');
    vTexto3[0].innerHTML="Elemento h2 cambiado por TagDOM1";
    vTexto3[17].innerHTML="Elemento h2 cambiado por TagDOM1";
    vTexto3[17].style.color="red"
    varGloval1="variable global modificada";

    vTexto3[17].innerHTML=`Tipo de variable de la varGlobal es:${typeof(varGloval1)}`;
    }
  
    function FCrear1()

    {
        let vLista=document.getElementById("ejmDOM1");
        vLista.style.backgroundColor="white";
        vLista.innerHTML="  <ul align='center'  style='color:rgb(47, 59, 34)'> " + 
        " <li>Capacidad de atencion</li> " +
            " <li>Consultar dudas no resueltas</li> " +
            " <li>Repasar temas y realizar tareas en casa</li>" +
        " </ul> " ;
        }


        function FAgregarTextoPermanente(){
            let vTexto4="<br> <p style=`font-size: 10px;` > TExto Agregado con concatenacion permanente </p>";
            vTexto1.innerHTML=vTexto1.innerHTML + vTexto4;
            
            }



            function FCrearElemento() {
                var vElemento = document.getElementById("complementario1");
                var nuevoH3= document.createElement("h3");
                var texto=document.createTextNode("DNI:");
                nuevoH3.appendChild(texto);
                vElemento.appendChild(nuevoH3);
                //CREAR un input text para poder completar el deporte favorito
                var nuevoInputText= document.createElement("input");
                nuevoInputText.type = "text";
                vElemento.appendChild(nuevoInputText);
                //CREAR un parrafo de tamaño 20px que pida ingresar tu DNI
                //CREAR su input number correspondiente//
                }