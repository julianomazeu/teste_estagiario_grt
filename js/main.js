var usuarios = []

function addUsuario(){

    var inputNome = document.getElementById('inputNome').value;
    var inputIdade = document.getElementById('inputIdade').value;

    if (!verificaUsuario(inputNome)) {
        adicionarUsuario ({ nome: inputNome, idade: inputIdade})
    }
}

function verificaUsuario(nome){

    for (var index in usuarios) {

        if (usuarios[index].nome == nome){
            alert('Usuário já cadastrado!')
            return true
        }
    }
}

function adicionarUsuario(novoUsuario){

    var tbody = document.getElementById('usuariosCadastrados')
    var tr = document.createElement('tr');

    for (var prop in novoUsuario) {

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(novoUsuario[prop]));
        tr.appendChild(td);
    }

    usuarios.push(novoUsuario)

    var indexUsuario = usuarios.length - 1

    createButtonRemove(tr, indexUsuario)

    tbody.appendChild(tr);
}

function createButtonRemove(tr, indexUsuario){
    var buttonRemove = document.createElement('button')
    buttonRemove.innerHTML = 'Remover'
    buttonRemove.className = 'botaoRemover'
    buttonRemove.addEventListener('click', function(){

        var remover = confirm('Você deseja remover o usuário selecionado?');
        if (remover){
            var tbody = document.getElementById('usuariosCadastrados')
            tbody.removeChild(tbody.children[indexUsuario])
            usuarios.splice(indexUsuario, 1)
        }
    })
    
    var td = document.createElement('td');
    td.appendChild(buttonRemove);
    tr.appendChild(td);
}

function organizar() {
    $(".tabelaUsuarios").tablesorter();
}