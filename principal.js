// busca os elemento a partir da classe e atribuir novo valor
var pacinte = document.querySelector(".titulo-secundario");
var titulo = document.querySelector(".titulo");
pacientes.textcontent = " meus pacientes";
titulo.textContent = "ucas nutrição";

// criar a variavel paciente, busca o elemento apartir da classe  alterando seu conteudo 
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

// busca o elemento da altura  e altera seu conteudo
var tdAltura = pacitente.querySelector(".info-altura")
 var altura = tdAltura.textContent;
 //CALCULAR  O IMC ALTERANDO OS ELEMENTOS
var tdIMC = pacinte.querySelector(".info-img");

tdIMC.textContent = imc; 


 var imc = peso / (altura * altura);
 console.log(altura);
console.log(paciente);
console.log(tdPeso);
console.log(peso);