function botaoPesquisar () {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Seleciona o valor do campoPesquisa e armazena na variavel para ser utilizado
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Devolve uma mensagem se o campoPesquisa for uma string invalida ou sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo para ser buscado!</p>";
        return;
    };
    // Transforma todo o valor informado no campoPesquisa em letras minusculas
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let musicos = "";
    // Itera sobre cada resultado da pesquisa
    for (let dado of bandasDeMetal) {
        // Transforma todo o valor informado em letras minusculas
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        musicos = dado.musicos.toLowerCase();
        // Condicional para o valor do campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || musicos.includes(campoPesquisa)) {
            // Cria o HTML para um item de resultado
            resultados += `
                <div class="item-resultado">
                        <h2><a href="#">${dado.titulo}</a></h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <p class="descricao-meta">${dado.musicos}</p>
                        <a href=${dado.link} target="_blank">Saiba mais clicando aqui</a>
                </div>
            `;
        };
    };
    //
    if (!resultados) {
        resultados = "<p>Nenhum resultado foi encontrado!</p>"
    }
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}