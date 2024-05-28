//FOR
//4. Faça um programa que imprima na tela a tabuada de um número 
//qualquer escolhido pelo usuário até o 10.


let numero= parseInt(prompt("Digite um numero para ver na tabuada"));

if(!isNan(numero)){
 for(let cont = 1; cont <= 10; cont++ )
        console.log(numero  + "X" + cont + "=" + (numero*cont));
}

else{
    console.log ("Numero invalido . Por favor , digite um numero valido")
}

console.log(inNan("Hello Word")); //retorna true
console.log(isNan(123)); //retorna false