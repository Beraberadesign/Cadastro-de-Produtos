
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
<<<<<<< HEAD
let indiceEdicao = null;

const CHAVE_STORAGE = "sistema_estoque_produtos";
const LIMITE_ESTOQUE_CRITICO = 3;
=======

let indiceEdicao = null;

const CHAVE_STORAGE = "sistema_estoque_produtos";
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6

//
// FASE 3: Elementos do DOM
//

const formProduto = document.getElementById("produto-form");
<<<<<<< HEAD
const btnLimparTudo = document.getElementById("limpar-tabela");
const totalEstoqueEl = document.getElementById("total-estoque");
const campoBusca = document.getElementById("campo-busca");
const btnSubmit = document.querySelector(".btn-primary");

const mensagemErro = document.getElementById("mensagem-erro");
=======

const btnLimparTudo = document.getElementById("limpar-tabela");

const totalEstoqueEl = document.getElementById("total-estoque");

const campoBusca = document.getElementById("campo-busca");

const btnSubmit = document.querySelector(".btn-primary");

const mensagemErro = document.getElementById("mensagem-erro");

>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
const mensagemSucesso = document.getElementById("mensagem-sucesso");

const btnBootstrap = document.getElementById("btn-bootstrap");

<<<<<<< HEAD
const campoOrdenacao = document.getElementById("ordenacao");
const btnExportarCSV = document.getElementById("btn-exportar-csv");
const btnBackupJSON = document.getElementById("btn-backup-json");
const btnImportarJSON = document.getElementById("btn-importar-json");
const arquivoJSON = document.getElementById("arquivo-json");

// Elementos do Modal
const modalOverlay = document.getElementById("modal-overlay");
const modalTitulo = document.getElementById("modal-titulo");
const modalMensagem = document.getElementById("modal-mensagem");
const modalCancelar = document.getElementById("modal-cancelar");
const modalConfirmar = document.getElementById("modal-confirmar");

//
// FASE 4: Mensagens
=======
// Elementos do Modal
const modalOverlay = document.getElementById("modal-overlay");

const modalTitulo = document.getElementById("modal-titulo");

const modalMensagem = document.getElementById("modal-mensagem");

const modalCancelar = document.getElementById("modal-cancelar");

const modalConfirmar = document.getElementById("modal-confirmar");

//
// FASE 4: Mensagens Inline V5
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
//

function exibirErro(mensagem) {
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";
<<<<<<< HEAD
=======

>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
    mensagemSucesso.style.display = "none";
}

function exibirSucesso(mensagem) {
    mensagemSucesso.textContent = mensagem;
    mensagemSucesso.style.display = "block";
<<<<<<< HEAD
=======

>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
    mensagemErro.style.display = "none";
}

function limparMensagens() {
    mensagemErro.textContent = "";
    mensagemSucesso.textContent = "";

    mensagemErro.style.display = "none";
    mensagemSucesso.style.display = "none";
}

//
<<<<<<< HEAD
// FASE 5: Modal de Confirmação
=======
// FASE 5: Modal de Confirmação V5
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
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

<<<<<<< HEAD
        (mostrarConfirmar ? modalConfirmar : modalCancelar).focus();
=======
        modalConfirmar.focus();
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6

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

<<<<<<< HEAD
    try {
        const listaEmTexto = JSON.stringify(listaDeProdutos);

        localStorage.setItem(CHAVE_STORAGE, listaEmTexto);

        return true;

    } catch (erro) {

        exibirErro("Não foi possível salvar os produtos no navegador.");

        return false;
    }
=======
    const listaEmTexto = JSON.stringify(listaDeProdutos);

    localStorage.setItem(CHAVE_STORAGE, listaEmTexto);
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
}

function carregarDoLocalStorage() {

<<<<<<< HEAD
    try {

        const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);

        if (!dadosSalvos) {
            return;
        }

        const produtosObjetos = JSON.parse(dadosSalvos);

        if (!Array.isArray(produtosObjetos)) {
            throw new Error("Formato de dados inválido.");
        }

        produtosObjetos.forEach((prod) => {

            const nomeValido =
                prod &&
                typeof prod.nome === "string" &&
                prod.nome.trim() !== "";

            const precoValido =
                Number.isFinite(Number(prod.preco)) &&
                Number(prod.preco) >= 0;

            const quantidadeValida =
                Number.isSafeInteger(Number(prod.quantidade)) &&
                Number(prod.quantidade) >= 0;

            if (!nomeValido || !precoValido || !quantidadeValida) {
                throw new Error("Produto salvo com dados inválidos.");
            }

            listaDeProdutos.push(
                new Produto(
                    prod.nome.trim(),
                    prod.preco,
                    prod.quantidade
                )
            );

        });

    } catch (erro) {

        listaDeProdutos.length = 0;

        exibirErro(
            "Não foi possível carregar os produtos salvos."
        );
=======
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
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
    }
}

//
// FASE 8: Cadastro e edição de produtos
//

formProduto.addEventListener("submit", function (event) {

    event.preventDefault();

    limparMensagens();

<<<<<<< HEAD
    const nomeInput =
        document.getElementById("nome").value.trim();

    const precoInput =
        document.getElementById("preco").value;

    const quantidadeInput =
        document.getElementById("quantidade").value;

=======
    const nomeInput = document.getElementById("nome").value.trim();

    const precoInput = document.getElementById("preco").value;

    const quantidadeInput = document.getElementById("quantidade").value;

    // Validação dos campos
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
    if (
        nomeInput === "" ||
        precoInput === "" ||
        quantidadeInput === "" ||
        !Number.isFinite(Number(precoInput)) ||
<<<<<<< HEAD
        !Number.isSafeInteger(Number(quantidadeInput)) ||
=======
        !Number.isInteger(Number(quantidadeInput)) ||
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
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
<<<<<<< HEAD

=======
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
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

<<<<<<< HEAD
    exibirSucesso(
        "Todos os produtos foram removidos com sucesso!"
    );

=======
    exibirSucesso("Todos os produtos foram removidos com sucesso!");
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
});

//
// FASE 10: Busca dinâmica
//

campoBusca.addEventListener("input", function () {

    atualizarInterface();

});

//
<<<<<<< HEAD
// FASE 11: Obter produtos filtrados e ordenados
=======
// FASE 11: Obter produtos filtrados
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
//

function obterProdutosFiltrados() {

<<<<<<< HEAD
    const termoBusca =
        campoBusca.value.toLowerCase().trim();

    const produtosFiltrados = listaDeProdutos.filter((produto) => {
=======
    const termoBusca = campoBusca.value.toLowerCase().trim();

    return listaDeProdutos.filter((produto) => {
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6

        return produto.nome.toLowerCase().includes(termoBusca);

    });
<<<<<<< HEAD

    const produtosOrdenados = [...produtosFiltrados];

    if (!campoOrdenacao) {
        return produtosOrdenados;
    }

    switch (campoOrdenacao.value) {

        case "nome":

            produtosOrdenados.sort((a, b) =>
                a.nome.localeCompare(
                    b.nome,
                    "pt-BR",
                    { sensitivity: "base" }
                )
            );

            break;

        case "preco":

            produtosOrdenados.sort(
                (a, b) => a.preco - b.preco
            );

            break;

        case "preco-desc":

            produtosOrdenados.sort(
                (a, b) => b.preco - a.preco
            );

            break;

        case "quantidade":

            produtosOrdenados.sort(
                (a, b) => a.quantidade - b.quantidade
            );

            break;

        case "padrao":

        default:

            break;
    }

    return produtosOrdenados;
=======
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
}

//
// FASE 12: Preparar edição
//

function prepararEdicao(indexReal) {

    limparMensagens();

    const produto = listaDeProdutos[indexReal];

<<<<<<< HEAD
    if (!produto) {
        return;
    }

=======
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
    document.getElementById("nome").value = produto.nome;

    document.getElementById("preco").value = produto.preco;

<<<<<<< HEAD
    document.getElementById("quantidade").value =
        produto.quantidade;
=======
    document.getElementById("quantidade").value = produto.quantidade;
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6

    indiceEdicao = indexReal;

    btnSubmit.textContent = "Salvar Alterações";

    formProduto.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
<<<<<<< HEAD

=======
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
}

//
// FASE 13: Sair do modo de edição
//

function sairDoModoEdicao() {

    indiceEdicao = null;

    btnSubmit.textContent = "Adicionar Produto";
<<<<<<< HEAD

}

//
// FASE 14: Remover produto
=======
}

//
// FASE 14: Remover produto com Modal
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
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

<<<<<<< HEAD
=======
    // Ajusta o índice caso exista uma edição em andamento
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
    if (indiceEdicao !== null) {

        if (indiceEdicao === indexReal) {

            sairDoModoEdicao();

            formProduto.reset();

        } else if (indiceEdicao > indexReal) {

            indiceEdicao--;
<<<<<<< HEAD

=======
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
        }
    }

    atualizarInterface();

    exibirSucesso("Produto removido com sucesso!");
<<<<<<< HEAD

=======
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
}

//
// FASE 15: Atualizar total do estoque
//

function atualizarTotalEstoque(produtosVisiveis) {

<<<<<<< HEAD
    const total = produtosVisiveis.reduce(
        (acc, produto) => {
            return acc + produto.calcularSubtotal();
        },
        0
    );

    totalEstoqueEl.textContent =
        `Total em Estoque: R$ ${total.toFixed(2).replace(".", ",")}`;

=======
    const total = produtosVisiveis.reduce((acc, produto) => {

        return acc + produto.calcularSubtotal();

    }, 0);

    totalEstoqueEl.textContent =
        `Total em Estoque: R$ ${total.toFixed(2).replace(".", ",")}`;
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
}

//
// FASE 16: Renderizar tabela
//

function renderizarTabela(produtosFiltrados) {

<<<<<<< HEAD
    const tabelaBody =
        document.querySelector("#tabela-produtos tbody");
=======
    const tabelaBody = document.querySelector("#tabela-produtos tbody");
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6

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

<<<<<<< HEAD
        // Estoque crítico: 3 unidades ou menos.
        if (
            Number(produto.quantidade) <= LIMITE_ESTOQUE_CRITICO
        ) {

            linha.classList.add("estoque-critico");

            linha.title = "Atenção: estoque crítico";
        }

=======
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
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
<<<<<<< HEAD

=======
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
}

//
// FASE 17: Atualizar interface
//

function atualizarInterface() {

    const produtosFiltrados = obterProdutosFiltrados();

    renderizarTabela(produtosFiltrados);

    atualizarTotalEstoque(produtosFiltrados);
<<<<<<< HEAD

}

//
// FASE 18: Exportação CSV
//

function exportarCSV() {

    if (listaDeProdutos.length === 0) {

        exibirErro("Não há produtos para exportar.");

        return;
    }

    const cabecalho = [
        "Nome",
        "Preço",
        "Quantidade",
        "Subtotal"
    ];

    const escaparCSV = (valor) => {

        const texto = String(valor ?? "");

        return `"${texto.replace(/"/g, '""')}"`;
    };

    const linhas = listaDeProdutos.map((produto) => [

        produto.nome,

        Number(produto.preco).toFixed(2).replace(".", ","),

        produto.quantidade,

        produto.calcularSubtotal().toFixed(2).replace(".", ",")

    ]);

    const conteudoCSV = [
        cabecalho.map(escaparCSV).join(";"),
        ...linhas.map((linha) =>
            linha.map(escaparCSV).join(";")
        )
    ].join("\r\n");

    const arquivo = new Blob(
        ["\uFEFF", conteudoCSV],
        {
            type: "text/csv;charset=utf-8;"
        }
    );

    const url = URL.createObjectURL(arquivo);

    const link = document.createElement("a");

    link.href = url;

    link.download = "estoque.csv";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    exibirSucesso("Arquivo CSV exportado com sucesso!");

}

//
// FASE 19: Backup JSON
//

function baixarBackupJSON() {

    const dadosBackup = JSON.stringify(
        listaDeProdutos,
        null,
        2
    );

    const arquivo = new Blob(
        [dadosBackup],
        {
            type: "application/json;charset=utf-8"
        }
    );

    const url = URL.createObjectURL(arquivo);

    const link = document.createElement("a");

    link.href = url;

    link.download = "backup_estoque.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    exibirSucesso("Backup JSON baixado com sucesso!");

}

//
// FASE 20: Validar produtos importados
//

function validarProdutosImportados(dados) {

    if (!Array.isArray(dados)) {

        throw new Error(
            "O arquivo precisa conter uma lista de produtos."
        );
    }

    return dados.map((produto) => {

        if (
            !produto ||
            typeof produto.nome !== "string" ||
            produto.nome.trim() === "" ||
            !Number.isFinite(Number(produto.preco)) ||
            Number(produto.preco) < 0 ||
            !Number.isSafeInteger(Number(produto.quantidade)) ||
            Number(produto.quantidade) < 0
        ) {

            throw new Error(
                "O arquivo contém um ou mais produtos inválidos."
            );
        }

        return new Produto(
            produto.nome.trim(),
            produto.preco,
            produto.quantidade
        );

    });

}

//
// FASE 21: Restaurar Backup JSON
//

function restaurarBackupJSON(arquivo) {

    if (!arquivo) {
        return;
    }

    const leitor = new FileReader();

    leitor.onload = async function (evento) {

        try {

            const dados = JSON.parse(evento.target.result);

            const produtosRestaurados =
                validarProdutosImportados(dados);

            const confirmou = await abrirModal(
                "Restaurar backup?",
                `O backup contém ${produtosRestaurados.length} produto(s). Os dados atuais serão substituídos. Deseja continuar?`
            );

            if (!confirmou) {
                arquivoJSON.value = "";
                return;
            }

            listaDeProdutos.length = 0;

            listaDeProdutos.push(...produtosRestaurados);

            if (salvarNoLocalStorage()) {

                sairDoModoEdicao();

                formProduto.reset();

                campoBusca.value = "";

                if (campoOrdenacao) {
                    campoOrdenacao.value = "padrao";
                }

                atualizarInterface();

                exibirSucesso(
                    "Backup restaurado com sucesso!"
                );
            }

        } catch (erro) {

            exibirErro(
                erro instanceof SyntaxError
                    ? "O arquivo selecionado não contém um JSON válido."
                    : (erro.message ||
                        "Não foi possível restaurar o backup.")
            );

        } finally {

            arquivoJSON.value = "";

        }
    };

    leitor.onerror = function () {

        exibirErro(
            "Não foi possível ler o arquivo selecionado."
        );

        arquivoJSON.value = "";

    };

    leitor.readAsText(arquivo, "UTF-8");

}

//
// FASE 22: Eventos das ferramentas V6
//

if (campoOrdenacao) {

    campoOrdenacao.addEventListener(
        "change",
        atualizarInterface
    );

}

if (btnExportarCSV) {

    btnExportarCSV.addEventListener(
        "click",
        exportarCSV
    );

}

if (btnBackupJSON) {

    btnBackupJSON.addEventListener(
        "click",
        baixarBackupJSON
    );

}

if (btnImportarJSON && arquivoJSON) {

    btnImportarJSON.addEventListener("click", function () {

        arquivoJSON.click();

    });

    arquivoJSON.addEventListener("change", function () {

        const arquivo =
            arquivoJSON.files && arquivoJSON.files[0];

        restaurarBackupJSON(arquivo);

    });

}

//
// FASE 23: Inicialização
=======
}

//
// FASE 18: Inicialização
>>>>>>> d73593ada0c1bcd7fcef2bd42a8c8161f47382e6
//

carregarDoLocalStorage();

atualizarInterface();
