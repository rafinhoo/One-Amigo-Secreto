let nomes = [];

function addAmigo() {
    let adicionar = document.getElementById('amigo');
    let nome = adicionar.value.trim();

    if (!nome) {
        alert('Adicione um nome');
        return;
    }

    if (nomes.includes(nome)) {
        alert('O nome já existe');
        return;
    }

    nomes.push(nome);
    console.log(nomes);
    atualizar();
    adicionar.value = "";
}

function atualizar() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nomes.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('A lista de amigos está vazia');
        return;
    }

    let nomeAleatorio = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[nomeAleatorio];

    const ul = document.getElementById('resultado');
    ul.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `Seu amigo secreto sorteado é: ${amigoSorteado}`;
    ul.appendChild(li);

    nomes = [];
    atualizar();
    adicionar.value = "";
}