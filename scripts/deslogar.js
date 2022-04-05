function selecionar (campo)
{
    return document.querySelector(campo);
}

titulo = selecionar('#titulo');
//titulo.classList.toggle("hidden");

let botao = selecionar('#deslogar');
botao.addEventListener('click', function()
{
    localStorage.removeItem('manterConectado');
    window.location.href = 'index.html'
})