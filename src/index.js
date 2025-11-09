//Inicio e interação com usuário
console.log("Digite seu nome de Herói:")
let nomeHeroi = "Super Fabulous"
console.log("Bem-vindo(a), " + nomeHeroi + "!")

let xp = 7599
let nivel;

//loop

for(let i = 0; i < 10000; i++){
    console.log("Seu XP atual é de: " + xp);
}

//estrutura condicional para verificar o nível do herói
if (xp <= 1000){
    nivel = "Ferro";
} else if (xp <= 2000){
    nivel = "Bronze";
} else if (xp <= 5000){
    nivel = "Prata";
} else if (xp <= 7000){
    nivel = "Ouro";
} else if (xp <= 8000){
    nivel = "Platina";
} else if (xp <= 9000){
    nivel = "Ascendente";
} else if (xp <= 10000){
    nivel = "Imortal";
} else {
    nivel = "Radiante"
}

console.log("O Herói de nome: " + nomeHeroi + " está no nível: " + nivel + "!")