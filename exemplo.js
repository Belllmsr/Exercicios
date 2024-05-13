
//apresentar alguma mensagem na tela
//alert("Hello Word!!");

//console.log("Hello Word!!");

//Escreva um programa que solicite o nome do usario
// e lhe de boas vindas , exibindo uma mensagem pelo console

//prompt () -> recea uma entrada digitada



//Concatenaçao -> juntar texto
//console.log ("Seja bem vindo " + nome +  "!!!");

//let pontos = 100;
//parseint ( ) -> Transforma o que esta entre () em numero inteiro
//let bonus = parseInt(prompt("Quantos pontos voce desejar somar?"));

//adiçao -> num1 + num2
//Subtraçao -> num1 - num2
//Multplicaçao -> num1 * num2
//Divisao -> num1 / num2

//let totelPontos = pontos + bonus ;

//console.log(totalPontos);
// camelCase - Javascript
// PescalCase - Java , C# , Classes
// snake_case - Python

//let notaAluno = parseFloat(prompt("Digite a nota do aluno:"));
//console.log(notaAluno);




//13.05

//For - loop contato

//Contando do 0 ao 10
//for(let num=0; num <=10; num++){
//    console.log (num);
//}

//Contagem Regressiva
//for(let cont= 10; cont >= 0; cont--){
//console.log(cont);
//}

//While - loop condicional

//let salario = 1000;
//while(salario < 5000){
  //  salario = salario + 100 ;
    //forma reduzida
    //salario +=100;
   // console.log("O salario e R$" + salario)
//}

//Do white - loop condicional

 //let saldo = 1000;

 //do{
   // console.log ("Esse e o saldo:" + saldo);
   // saldo += 100;

 //}while(saldo < 5000);

 //Array

 let frutas= ["Banana","Laranja","Maça","Pitaya","Melacia"]
 console.log(frutas[3])

 //forEache=>percorre uma lista
 //frutas.forEach(fruta=>{
// console.log("A fruta e:" + fruta);
// });

//Percorrendo uma lista com for
//.Length=> quantidade de elementos dentro de um array
 for(let indice = 0; indice <frutas.length; indice++){
    console.log(frutas[indice]);
    if (frutas[indice]=="Pitaya"){
console.log("Eu gosto de" + frutas[indice]);

    }
 }