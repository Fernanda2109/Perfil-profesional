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
  let array_yex= ["lunes","martes","miercoles", "jueves", "viernes", "sabado"];
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