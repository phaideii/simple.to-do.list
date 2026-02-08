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
    
        const listatarefas = document.getElementById("listatarefas")
        //pega o elemento html com id listatarefas e guarda na variavel listatarefas, para depois usar a variavel listatarefas para adicionar a tarefa na lista de tarefas.
        let novatarefa = document.createElement("li")
        //a variavel novatarefa cria um li, a lista.
        novatarefa.textContent = addtarefa
        //o texto do li criado na variavel novatarefa recebe o valor da variavel addtarefa, ou seja, o valor digitado no input.
        listatarefas.appendChild(novatarefa)
        //a variavel listatarefas, que é a ul, recebe um filho, que é a variavel novatarefa, ou seja, o li criado.
    }

    tarefa.value = "";
    //limpa o input ja que ele fica vazio no final da função.

}
