function exercicioData(){
    let numberdata = prompt("Digite um numero de 1 a 7");

if(numberdata == "1" ){
    console.log("segunda-feira")
}

if(numberdata == "2" ){
    console.log("terça-feira")
}
if(numberdata == "3" ){
    console.log("quarta-feira")
}
if(numberdata == "4" ){
    console.log("quinta-feira")
}
if(numberdata == "5" ){
    console.log("sexta-feira")
}
if(numberdata == "6" ){
    console.log("sabado")
}
if(numberdata == "7" ){
    console.log("domingo")
}
}

let opcao = window.prompt("MENU\nDigite a opção desejada: \n\n1 - Data \n\n2 - Par e Impar \n\n3 - Tabuada ")

switch(opcao){
    case"1":
    exercicioData()
        break;
    default:
        break;
}
function exercicioNumb() {

    let numb = parseFloat(prompt("Digite o numero novamente"))
    
    if (numb % 2 == 0 ) {
        console.log ("o numero e par")}
    
        else(console.log("o numero e impar"))
}

switch(opcao){
    case "2":
    exercicioNumb()
        break;

    default:
        break;
}

function exercicioTabu() {

    let numero= parseInt(prompt("Digite um numero para ver na tabuada"));
    
    if(!isNaN(numero)){
     for(let cont = 1; cont <= 10; cont++ )
            console.log(numero + "X" + cont + "=" + (numero*cont));
    }
    
    else{
        console.log ("Numero invalido . Por favor , digite um numero valido")
    }
    
    console.log(isNaN ("Hello Word")); //retorna true
    console.log(isNaN(123)); //retorna false
}

switch(opcao){
    case "3":
    exercicioTabu()
        break;

    default:
        break;
}
