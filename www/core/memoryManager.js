export class MemoryManager {

    constructor() {

        this.chave = "freddy_memory";

        this.memoria = this.carregar();

        console.log(
            "MemoryManager iniciado:",
            this.memoria
        );
    }

    carregar() {

        try {

            const dados =
                localStorage.getItem(this.chave);

            if (!dados) {
                return [];
            }

            const memoria =
                JSON.parse(dados);

            if (!Array.isArray(memoria)) {
                return [];
            }

            return memoria;

        } catch (erro) {

            console.error(
                "Erro ao carregar memória:",
                erro
            );

            return [];
        }
    }

    salvar() {

        localStorage.setItem(
            this.chave,
            JSON.stringify(this.memoria)
        );
    }

    adicionar(categoria, conteudo) {

        if (
            typeof categoria !== "string" ||
            typeof conteudo !== "string"
        ) {
            return false;
        }

        if (
            categoria.trim() === "" ||
            conteudo.trim() === ""
        ) {
            return false;
        }

        const novaMemoria = {

            id: Date.now(),

            categoria: categoria.trim(),

            conteudo: conteudo.trim(),

            criadaEm: new Date().toISOString()
        };

        this.memoria.push(novaMemoria);

        this.salvar();

        console.log(
            "Nova memória salva:",
            novaMemoria
        );

        return true;
    }

    obterTodas() {

        return [...this.memoria];
    }

    obterPorCategoria(categoria) {

        return this.memoria.filter(
            memoria =>
                memoria.categoria === categoria
        );
    }

    remover(id) {

        const tamanhoAnterior =
            this.memoria.length;

        this.memoria =
            this.memoria.filter(
                memoria => memoria.id !== id
            );

        if (
            this.memoria.length !== tamanhoAnterior
        ) {

            this.salvar();

            return true;
        }

        return false;
    }

    limpar() {

        this.memoria = [];

        this.salvar();

        console.log(
            "Memória permanente limpa."
        );
    }

    quantidade() {

        return this.memoria.length;
    }
}