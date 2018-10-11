var a = 1;
function global(){
  console.log(a + ", llamado desde la opcion global");
}

global();
console.log(a + ", llamado directo desde la opcion console");

var num1 = 3;
var num2 = 5;
//se suma los numeros y se muestra el resultado
resultado=num1+num2;
alert("resultado de la 1ra suma: "+resultado);
console.log("resultado de la 1ra suma: "+resultado);

var num1 = 10;
var num2 = 7;
//se suma los numeros y se muestra el resultado
resultado=num1+num2;
alert("resultado de la  2da suma: "+resultado);
console.log("resultado de la 2da suma: "+resultado);

var contbisiesto = 0;
var contNobisiesto = 0;

function bisiesto(year){
  resultado = year%4;
  if(resultado==0){
    console.log(year + " es bisiesto");
    contbisiesto++;
  }else{
    console.log(year + " no es bisiesto");
    contNobisiesto++;
  }
}

//bisiesto(1983);
//bisiesto(2016);

var anofinal = 2013;
var anoinicial = 1993;
for(var i=anoinicial; i < anofinal; i++){
  console.log(i);
  bisiesto(i);
}

console.log("cantidiad de bisiesto:"+ contbisiesto);
console.log("cantidiad de No bisiesto:"+ contNobisiesto);


function parEimpar(numero){
  resultado = numero%2;
  if(resultado==0){
    console.log(numero + " es par");
  }else{
    console.log(numero + " es impar");
  }

}
var numInicial=2;
var numFinal=30;

for(var i=numInicial; i < numFinal; i++){
  parEimpar(i);
}
