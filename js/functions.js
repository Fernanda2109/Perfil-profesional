console.log("prueba de conexion");
// tipo de variable 
// variables constantes 
const pi = 3.1416;
const pu = 2.54;
const name = "Wilder duarte";
// var para variables globales
var cal_days = 15;
// let para variables de bloques 
let j=0;
let count =1;
// formas de impresion 
// alert 
//alert(name);
// console
console.log(name);
// console.log(days);
console.log("15");
//pantalla-body
document.write(name);
document.getElementById("box_one").innerHTML="<h1>Wilder duarte</h1>";
document.getElementById("box_two").innerText="<h1>Wilder duarte</h1>";



// Swal.fire({
// icon:'error',
//     title:"wilder duarte",
//     text:pu.toString(),
//     footer:name,
//     showConfirmButton:false,
//     timer:2000,
//     position:'center-end'
    
// });
  //tipos de datos
  //numero
  var num_one=10;
  var number_two=2.5;
  // string
  var text= "soy un texto";
  //bolean
  var bolean= true; 
  var bolean_two= false;
  // arrays (arreglos)(listas)
  let arrray_num= [1,2,3,4];
  let array_yexdd= ["lunes","martes","miercoles", "jueves", "viernes", "sabado"];
  let array_mix= [1,"2",3,2.5,"c"];
  let array_mul =[
    {name:"A", last_name:1,age:23},
    {name:"B", last_name:1,age:2},
    {name:"C", last_name:1,age:4},
    {name:"D", last_name:1,age:2}
  ]
// operadores basicos 
//suma
var suma= num_one+number_two;
console.log("la suma es"+suma );
console.log("la concatencion es"+ num_one+number_two);
// resta
var resta= num_one-number_two;
console.log("la resta es"+resta );
// multiplicacion
var multiplicacion= num_one*number_two;
console.log("la multiplicacion es"+multiplicacion );

//divicion
var division= num_one/number_two;
console.log("la dicision es"+division );

//modulo
var modulo=num_one%number_two;
console.log("su modulo es"+modulo);

console.log(
    "la suma es"+suma+"\n"+
"la resta es"+resta+"\n"+
"la multiplicacion es"+multiplicacion+"\n"+
"la suma es"+division+"\n"+
"su modulo es"+modulo+"\n"

)

var respuesta=
"la suma es"+suma+"<br>"+
"la resta es"+resta+"<br>"+
"la multiplicacion es"+multiplicacion+"<br>"+
"la suma es"+division+"<br>"+
"su modulo es"+modulo+"<br>";

//Swal.fire(respuesta);
Swal.fire({
    showConfirmButton:false,
    background: '#000',
    icon: 'sucess',
    title: 'respuesta',
    html:respuesta
})
// Operadores logicos y estructructuras condicionales 
// And && con un if 
var bool= true;
var numeric=7;
if (!bool&&numeric==="7"){// se llama negacion o inverse
  // si utilizamos 3 veces el igual compara el valor y tipo de dato
console.log("ENTRA IF");
}
else{
  console.log("ENTRA ELSE");
}
// OR || con if
var age= "31";
if(age == 32 || numeric==7){;
console.log("entra en if");
age++;
}
else{
  console.log("Entra a else");
  age-=2;
  console.log(age);
}
// For 
let array_yexdddd = ["lunes","martes","miercoles", "jueves", "viernes", "sabado"];
for (let i=0; i<array_yexdddd.length; i++){
  console.log(array_yexdddd[i]+ " "+ (i+1));

}
// WHILE
let position=0;
while(position<7){
  console.log(array_yexdddd[position]) + " " +(positio +1);
  position++;
}
// do while
let w= 0;
do{
  console.log("ho");
  console.log(array_yedddd[w]+""+(w+1));
  w++;
}while(w<array_yexdddd.length);
// event and functions
//ejem();
//ejem2();
function load_page(){
  alert("Bienvenido");
}
function box_onblur(){
  alert("olvidaste dar enter")
}
function ejem(){
  alert("Bienvenido 2")
}
function ejem2(){
  alert("Bienvenido 3")
}
function box_onblur(){
  const box_onblur= document.querySelector("#box_omblur");
  if (box_onblur.ariaValueMax.length<=2){
    alert("problemas con el texto");
  }
}
const btn_changeColor= document.querySelector("#changecolor");
btn_changeColor.addEventListener("click",()=>{
  document.body.style.background="rgb(0,0,20)";
  document.body.style.color="#fff"

});
const form= document.getElementById("form_register");
const nombres=document.getElementById("nombres");
const apellidos= document.getElementById("Apellidos");
const validation= documento.getElementById("validation");
form.addEventListener("submit",name_event=>{

  form.addEventListener("submit", name_event=>{
    name_event.preventDefault();
    let info="";
    if (nombres.ariaValueMax.length<= || apellidos.ariaValueMax.length){
      info+= "Nombres o Apellidos incoorectos";
      validation.style.color="green";
    }
    validation.innerTExt=info;
  })

})
