function saudacao() {

    let nomePessoa = prompt("Digite seu nome: ")

    let horaAtual = new Date ().getHours()

    if(horaAtual > 6 && horaAtual < 13) {
        window.alert("Bom dia " + nomePessoa)
    }else if (horaAtual >= 13 && horaAtual < 18) {
        window.alert("Boa tarde " + nomePessoa)
    }else {
        window.alert("Boa noite " + nomePessoa)
    }
    
}

saudacao()

function somar(num1, num2, num3 ) {
let soma = num1 + num2 + num3
return soma
}
//precisa do return

let resultado = somar (5, 6, 9)

console.log ("O resultado e: " + resultado)


//exemplo objeto

let professor = {}

professor.nome = prompt("Digite o nome")
professor.sobreno = prompt("Digite o sobrenome")
professor.idade = parseInt(prompt("Digite a idade"))

console.log(professor);