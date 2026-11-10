
//
// FASE 1: Modelagem dos dados
//

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = parseFloat(preco);
        this.quantidade = parseInt(quantidade);
    }

    calcularSubtotal() {
        return this.preco * this.quantidade;
    }
}

//
// FASE 2: Gerenciamento de Estado
//

const listaDeProdutos = [];

let indiceEdicao = null;

const CHAVE_STORAGE = "sistema_estoque_produtos";

//
// FASE 3: Elementos do DOM
//

const formProduto = document.getElementById("produto-form");

const btnLimparTudo = document.getElementById("limpar-tabela");

const totalEstoqueEl = document.getElementById("total-estoque");

const campoBusca = document.getElementById("campo-busca");

const btnSubmit = document.querySelector(".btn-primary");

const mensagemErro = document.getElementById("mensagem-erro");

const mensagemSucesso = document.getElementById("mensagem-sucesso");

const btnBootstrap = document.getElementById("btn-bootstrap");

// Elementos do Modal
const modalOverlay = document.getElementById("modal-overlay");

const modalTitulo = document.getElementById("modal-titulo");

const modalMensagem = document.getElementById("modal-mensagem");

const modalCancelar = document.getElementById("modal-cancelar");

const modalConfirmar = document.getElementById("modal-confirmar");

//
// FASE 4: Mensagens Inline V5
//

function exibirErro(mensagem) {
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";

    mensagemSucesso.style.display = "none";
}

function exibirSucesso(mensagem) {
    mensagemSucesso.textContent = mensagem;
    mensagemSucesso.style.display = "block";

    mensagemErro.style.display = "none";
}

function limparMensagens() {
    mensagemErro.textContent = "";
    mensagemSucesso.textContent = "";

    mensagemErro.style.display = "none";
    mensagemSucesso.style.display = "none";
}

//
// FASE 5: Modal de Confirmação V5
//

function abrirModal(titulo, mensagem, mostrarConfirmar = true) {

    return new Promise((resolve) => {

        modalTitulo.textContent = titulo;
        modalMensagem.textContent = mensagem;

        modalConfirmar.style.display =
            mostrarConfirmar ? "inline-block" : "none";

        modalCancelar.textContent =
            mostrarConfirmar ? "Cancelar" : "Fechar";

        modalOverlay.classList.add("ativo");
        modalOverlay.setAttribute("aria-hidden", "false");

        modalConfirmar.focus();

        function finalizar(resultado) {

            modalOverlay.classList.remove("ativo");
            modalOverlay.setAttribute("aria-hidden", "true");

            modalCancelar.removeEventListener("click", cancelar);
            modalConfirmar.removeEventListener("click", confirmar);
            modalOverlay.removeEventListener("click", clicarFora);
            document.removeEventListener("keydown", teclaEsc);

            resolve(resultado);
        }

        function cancelar() {
            finalizar(false);
        }

        function confirmar() {
            finalizar(true);
        }

        function clicarFora(event) {
            if (event.target === modalOverlay) {
                finalizar(false);
            }
        }

        function teclaEsc(event) {
            if (event.key === "Escape") {
                finalizar(false);
            }
        }

        modalCancelar.addEventListener("click", cancelar);
        modalConfirmar.addEventListener("click", confirmar);
        modalOverlay.addEventListener("click", clicarFora);
        document.addEventListener("keydown", teclaEsc);

    });
}

//
// FASE 6: Conceito Bootstrap
//

btnBootstrap.addEventListener("click", async function () {

    await abrirModal(
        "Conceito Bootstrap",
        "O Bootstrap é um framework front-end que facilita a criação de interfaces modernas e responsivas. Ele oferece componentes prontos, como botões, formulários, tabelas, alertas e modais. Neste projeto, utilizamos CSS personalizado para construir nossa interface, mas poderíamos utilizar o Bootstrap para acelerar a criação dos componentes visuais e garantir responsividade.",
        false
    );

});

//
// FASE 7: Persistência com localStorage
//

function salvarNoLocalStorage() {

    const listaEmTexto = JSON.stringify(listaDeProdutos);

    localStorage.setItem(CHAVE_STORAGE, listaEmTexto);
}

function carregarDoLocalStorage() {

    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);

    if (dadosSalvos) {

        try {

            const produtosObjetos = JSON.parse(dadosSalvos);

            if (!Array.isArray(produtosObjetos)) {
                throw new Error("Formato de dados inválido.");
            }

            produtosObjetos.forEach((prod) => {

                const produtoInstanciado = new Produto(
                    prod.nome,
                    prod.preco,
                    prod.quantidade
                );

                listaDeProdutos.push(produtoInstanciado);

            });

        } catch (erro) {

            exibirErro("Não foi possível carregar os produtos salvos.");

            listaDeProdutos.length = 0;
        }
    }
}

//
// FASE 8: Cadastro e edição de produtos
//

formProduto.addEventListener("submit", function (event) {

    event.preventDefault();

    limparMensagens();

    const nomeInput = document.getElementById("nome").value.trim();

    const precoInput = document.getElementById("preco").value;

    const quantidadeInput = document.getElementById("quantidade").value;

    // Validação dos campos
    if (
        nomeInput === "" ||
        precoInput === "" ||
        quantidadeInput === "" ||
        !Number.isFinite(Number(precoInput)) ||
        !Number.isInteger(Number(quantidadeInput)) ||
        Number(precoInput) < 0 ||
        Number(quantidadeInput) < 0
    ) {

        exibirErro("Preencha todos os campos corretamente!");

        return;
    }

    const novoProduto = new Produto(
        nomeInput,
        precoInput,
        quantidadeInput
    );

    if (indiceEdicao === null) {

        listaDeProdutos.push(novoProduto);

        exibirSucesso("Produto cadastrado com sucesso!");

    } else {

        listaDeProdutos[indiceEdicao] = novoProduto;

        exibirSucesso("Produto atualizado com sucesso!");
    }

    salvarNoLocalStorage();

    sairDoModoEdicao();

    atualizarInterface();

    formProduto.reset();
});

//
// FASE 9: Limpar todos os produtos
//

btnLimparTudo.addEventListener("click", async function () {

    limparMensagens();

    if (listaDeProdutos.length === 0) {

        exibirErro("A tabela já está vazia!");

        return;
    }

    const confirmou = await abrirModal(
        "Limpar todo o estoque?",
        "Tem certeza que deseja remover TODOS os produtos? Essa ação não poderá ser desfeita."
    );

    if (!confirmou) {
        return;
    }

    listaDeProdutos.length = 0;

    localStorage.removeItem(CHAVE_STORAGE);

    sairDoModoEdicao();

    formProduto.reset();

    campoBusca.value = "";

    atualizarInterface();

    exibirSucesso("Todos os produtos foram removidos com sucesso!");
});

//
// FASE 10: Busca dinâmica
//

campoBusca.addEventListener("input", function () {

    atualizarInterface();

});

//
// FASE 11: Obter produtos filtrados
//

function obterProdutosFiltrados() {

    const termoBusca = campoBusca.value.toLowerCase().trim();

    return listaDeProdutos.filter((produto) => {

        return produto.nome.toLowerCase().includes(termoBusca);

    });
}

//
// FASE 12: Preparar edição
//

function prepararEdicao(indexReal) {

    limparMensagens();

    const produto = listaDeProdutos[indexReal];

    document.getElementById("nome").value = produto.nome;

    document.getElementById("preco").value = produto.preco;

    document.getElementById("quantidade").value = produto.quantidade;

    indiceEdicao = indexReal;

    btnSubmit.textContent = "Salvar Alterações";

    formProduto.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

//
// FASE 13: Sair do modo de edição
//

function sairDoModoEdicao() {

    indiceEdicao = null;

    btnSubmit.textContent = "Adicionar Produto";
}

//
// FASE 14: Remover produto com Modal
//

async function removerProduto(indexReal) {

    const produto = listaDeProdutos[indexReal];

    if (!produto) {
        return;
    }

    const confirmou = await abrirModal(
        "Excluir produto?",
        `Deseja realmente remover o produto "${produto.nome}" do estoque?`
    );

    if (!confirmou) {
        return;
    }

    listaDeProdutos.splice(indexReal, 1);

    salvarNoLocalStorage();

    // Ajusta o índice caso exista uma edição em andamento
    if (indiceEdicao !== null) {

        if (indiceEdicao === indexReal) {

            sairDoModoEdicao();

            formProduto.reset();

        } else if (indiceEdicao > indexReal) {

            indiceEdicao--;
        }
    }

    atualizarInterface();

    exibirSucesso("Produto removido com sucesso!");
}

//
// FASE 15: Atualizar total do estoque
//

function atualizarTotalEstoque(produtosVisiveis) {

    const total = produtosVisiveis.reduce((acc, produto) => {

        return acc + produto.calcularSubtotal();

    }, 0);

    totalEstoqueEl.textContent =
        `Total em Estoque: R$ ${total.toFixed(2).replace(".", ",")}`;
}

//
// FASE 16: Renderizar tabela
//

function renderizarTabela(produtosFiltrados) {

    const tabelaBody = document.querySelector("#tabela-produtos tbody");

    tabelaBody.innerHTML = "";

    if (produtosFiltrados.length === 0) {

        const linha = document.createElement("tr");

        const celula = document.createElement("td");

        celula.colSpan = 5;

        celula.textContent = "Nenhum produto encontrado.";

        celula.classList.add("mensagem-vazia");

        linha.appendChild(celula);

        tabelaBody.appendChild(linha);

        return;
    }

    produtosFiltrados.forEach((produto) => {

        const linha = document.createElement("tr");

        // Nome
        const colunaNome = document.createElement("td");

        colunaNome.textContent = produto.nome;

        // Preço
        const colunaPreco = document.createElement("td");

        colunaPreco.textContent =
            `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;

        // Quantidade
        const colunaQuantidade = document.createElement("td");

        colunaQuantidade.textContent = produto.quantidade;

        // Subtotal
        const colunaSubtotal = document.createElement("td");

        colunaSubtotal.textContent =
            `R$ ${produto.calcularSubtotal().toFixed(2).replace(".", ",")}`;

        // Ações
        const colunaAcoes = document.createElement("td");

        const indexReal = listaDeProdutos.indexOf(produto);

        // Botão Editar
        const btnEditar = document.createElement("button");

        btnEditar.textContent = "Editar";

        btnEditar.classList.add("btn-editar");

        btnEditar.addEventListener("click", function () {

            prepararEdicao(indexReal);

        });

        // Botão Remover
        const btnRemover = document.createElement("button");

        btnRemover.textContent = "Remover";

        btnRemover.classList.add("btn-remover");

        btnRemover.addEventListener("click", function () {

            removerProduto(indexReal);

        });

        colunaAcoes.appendChild(btnEditar);

        colunaAcoes.appendChild(btnRemover);

        linha.appendChild(colunaNome);

        linha.appendChild(colunaPreco);

        linha.appendChild(colunaQuantidade);

        linha.appendChild(colunaSubtotal);

        linha.appendChild(colunaAcoes);

        tabelaBody.appendChild(linha);

    });
}

//
// FASE 17: Atualizar interface
//

function atualizarInterface() {

    const produtosFiltrados = obterProdutosFiltrados();

    renderizarTabela(produtosFiltrados);

    atualizarTotalEstoque(produtosFiltrados);
}

//
// FASE 18: Inicialização
//

carregarDoLocalStorage();

atualizarInterface();
