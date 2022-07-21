const card = document.querySelector("[data-card]")

function paraPaginadoProjeto(site) {
    card.addEventListener('click',() => {
        window.open(site)
    })
}
paraPaginadoProjeto("https://robotron-laiozago.vercel.app/")