function enviarwhats(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const numero = "5582991156122";

    const texto = `olá! me chamo ${nome}. ${mensagem}`;

    const msgformatada = encodeURIComponent(texto);

    const url = `https://wa.me/${numero}?text=${msgformatada}`;

    window.open(url, '_blank');
}
