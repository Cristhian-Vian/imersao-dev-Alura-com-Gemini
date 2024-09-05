function botaoPesquisar () {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
        // Cria o HTML para um item de resultado
        resultados += `
            <div class="item-resultado">
                    <h2><a href="#">${dado.titulo}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Saiba mais clicando aqui</a>
            </div>
        `
    };

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}