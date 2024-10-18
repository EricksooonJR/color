const color=document.querySelector("#color");
const salida=document.getElementById("salida");
const storage=localStorage.getItem("color")||"#ffffff";
const storage2=localStorage.getItem("numero")||0;
const guardar=document.getElementById("boton");
const lista=document.getElementById("colores")

suma.textContent=storage2;
var total=storage2;
console.log(storage2)
color.value=storage;

console.log(storage);

const storageLista=JSON.parse(localStorage.getItem("nlis")) || [];

const crearElementoLista=(colorValue)=>{
    const nuevoColor=document.createElement("li");
    nuevoColor.textContent=colorValue;
    nuevoColor.style.background=colorValue;
    lista.appendChild(nuevoColor)

}
lista.innerHTML='';
storageLista.forEach(item =>crearElementoLista(item));



const setColor=() =>{
    const value =color.value;
    salida.textContent=value;
    salida.style.background=value;
    salida.style.color= "#fff";
}

const saveColor=(value)=>{
    localStorage.setItem("color",value)
}


const ColorAdd=(value) =>{
    total=Number(total)+1;
    suma.textContent=total;
    localStorage.setItem("numero",total);

    const nuevoColor=color.value;
    crearElementoLista(nuevoColor)
//Actualizar lista

storageLista.push(nuevoColor)
localStorage.setItem("nlis",JSON.stringify(storageLista));

}


setColor();
color.addEventListener("input", setColor);
color.addEventListener("change",()=>saveColor(color.value));
guardar.addEventListener("click",ColorAdd);