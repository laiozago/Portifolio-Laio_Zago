/* no o objeto o data-card="nome" */

const sites = [{
    projeto: "front-end",
    nome: "Robotron",
    endereco: "https://robotron-laiozago.vercel.app/",

}, {
    projeto: "front-end",
    nome: "Barbearia",
    endereco: "https://barbearia-laiozago.vercel.app/index.html"
},
{
    projeto: "front-end",
    nome: "Mochila-de-viagem",
    endereco: "https://mochila-de-viagem-laiozago.vercel.app/"
},{
    projeto: "front-end",
    nome: "Equacao-do-segungo-grau",
    endereco: "https://equacao-do-segundo-grau.vercel.app/"
}];

let siteRobotron = sites[0].endereco
let siteBarbearia = sites[1].endereco
let siteMochilaDeViagem = sites[2].endereco
let siteEquacaoDeSegundoGrau = sites[3].endereco

let cardRobotron = document.querySelector("[data-card='Robotron']")
let cardBarbearia = document.querySelector("[data-card='Barbearia']")
let cardMochilaDeViagem = document.querySelector("[data-card='Mochila-de-viagem']")
let cardEquacaoDoSegundoGrau = document.querySelector("[data-card='Equacao-do-segundo-grau']")


cardRobotron.addEventListener("click", () => {
    window.open(siteRobotron)
})

cardBarbearia.addEventListener("click", () => {
    window.open(siteBarbearia)
})

cardMochilaDeViagem.addEventListener("click", () => {
    window.open(siteMochilaDeViagem)
})

cardEquacaoDoSegundoGrau.addEventListener("click", () => {
    window.open(siteEquacaoDeSegundoGrau)
})