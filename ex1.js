//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário 
//e uma senha. Verifique se o nome do usuario e nome de usuário é 
//"admin" e a senha é "senha123". 
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

//solicita ao usario um nome de usuario
let username = prompt("Digite um nome de usuario ");

//solicita ao usario uma senha
let senha = prompt ("Digite a senha: ");

//Verifique se o nome do usuario e nome de usuário é "admin" e a senha é "senha123". 
//CASO SIM -> Exiba a mensagem de login bem sucedida
//Caso NAO-> Exiba a mensagem de usuario ou senha incorreta

if(username == "adimin" && senha == "senha123"){
console.log("Login bem sucedido");
}
else{
    console.log("Voce nao tem permissao de acesso!")
}



//Exiba uma mensagem indicando se o login foi bem-sucedido ou nao