let tarefas = []
function adicionarTarefa() {
    //toda o codigo é executado em ordem quando o botão é clicado.

    const tarefa = document.getElementById("tarefa")
    //serve para procurar o elemento html com id tarefa e guardar o valor na variavel tarefa, para depois usar o valor da variavel tarefa para adicionar a tarefa na lista de tarefas.
    let addtarefa = tarefa.value.trim()
    //pega o valor que esta sendo escrito em "tarefa" e guarda na variavel addtarefa, devido ao .value

    const mensagem = document.getElementById("mensagem")
    //variavel criada para otimizar codigo


        //se o valor for vazio, mostra uma mensagem de erro.
    if (addtarefa == "") {
        //mostra mensagem de erro criando uma nova variavel para o erro.
        let mensagemErro = "Digite uma tarefa antes.";
        mensagem.style.color = "#a34743"
        mensagem.textContent = mensagemErro
    }
    else {
        let mensagemSucesso = "task adicionada com sucesso!";
        mensagem.style.color = "#ff8282"
        mensagem.textContent = mensagemSucesso
        //pega o elemento html com id mensagemSucesso e muda o texto para o valor da variavel mensagem, ou seja, "task adicionada com sucesso!".
    
        tarefas.push(addtarefa)
        //adiciona o valor da variavel addtarefa, ou seja, o valor digitado no input, na lista de tarefas, ou seja, na variavel tarefas.
        renderizarTarefas()
        //chama a função renderizarTarefas para mostrar a lista de tarefas atualizada.

    }

    tarefa.value = "";
    //limpa o input ja que ele fica vazio no final da função.

}

function renderizarTarefas() {
        const listatarefas = document.getElementById("listatarefas")
        listatarefas.innerHTML = ""
         //pega o elemento html com id listatarefas e guarda na variavel listatarefas, para depois usar a variavel listatarefas para adicionar a tarefa na lista de tarefas.
        
        // for itens na lista
        //1. item inicial (iterador)
        //2. item final (condição de parada)
        //3. se vai de um em um elemento ou de outro valor (incremento/frequencia)
        
        //for (iterador, condição de parada, incremento)

        //i++ é o mesmo que i = i + 1, ou seja, o iterador i recebe o valor de i mais 1, ou seja, ele vai de um em um elemento da lista.

        for (let i = 0; i < tarefas.length; i++){
        let novatarefa = document.createElement("li")
        //a variavel novatarefa cria um li, a lista.
        novatarefa.textContent = tarefas[i]
        //o texto do li criado na variavel novatarefa recebe o valor da variavel tarefas[i], ou seja, o valor da tarefa na posição i da lista de tarefas.
        
        let botaoRemover = document.createElement("button")
        botaoRemover.className= "remover"
        botaoRemover.textContent = "remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className= "editar"
        botaoEditar.textContent = "editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novatarefa.appendChild(botaoRemover)
        //a variavel novatarefa, que é o li criado, recebe um filho, que é a variavel botaoRemover, ou seja, o button criado.
        novatarefa.appendChild(botaoEditar)
        //a variavel novatarefa, que é o li criado, recebe um filho, que é a variavel botaoEditar, ou seja, o button criado.
        listatarefas.appendChild(novatarefa)
        //a variavel listatarefas, que é a ul, recebe um filho, que é a variavel novatarefa, ou seja, o li criado.
        }
  
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i) {
    let  tarefaeditada = prompt("edite a tarefa:")
    if (tarefaeditada.trim() !== "") {
        tarefas[i] = tarefaeditada
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    mensagem.textContent = "Lista limpa com sucesso!"
}
