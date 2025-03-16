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

    for (let i = 0; i < nomes.length; i++) {
        const li = document.createElement('li')
        li.textContent = nomes[i]
        lista.appendChild(li)
    };
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('A lista de amigos está vazia');
        return;
    }

    let indice = Math.floor(Math.random() * nomes.length);
    let sorteado = nomes[indice];

    const ul = document.getElementById('resultado');
    ul.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `Seu amigo secreto sorteado é: ${sorteado}`;
    ul.appendChild(li);

    nomes = [];
    atualizar();
    adicionar.value = "";
}