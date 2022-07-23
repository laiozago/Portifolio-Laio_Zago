/* no o objeto o data-card="nome" */

const sites = [{
    projeto: "front-end",
    nome: "Robotron",
    endereco: "https://robotron-laiozago.vercel.app/",

}, {
    projeto: "front-end",
    nome: "Barbearia",
    endereco: "https://barbearia-laiozago.vercel.app/index.html"
}];

let siteRobotron = sites[0].endereco
let siteBarbearia = sites[1].endereco

let cardRobotron = document.querySelector("[data-card='Robotron']")
let cardBarbearia = document.querySelector("[data-card='Barbearia']")


cardRobotron.addEventListener("click", () => {
    window.open(siteRobotron)
})

cardBarbearia.addEventListener("click", () => {
    window.open(siteBarbearia)
})