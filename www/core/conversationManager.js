export class ConversationManager {

    constructor(limite = 20) {

        this.limite = limite;

        this.historico = [];

        console.log("ConversationManager iniciado.");
    }

    adicionarUsuario(conteudo) {

        this.adicionar("usuario", conteudo);
    }

    adicionarFreddy(conteudo) {

        this.adicionar("freddy", conteudo);
    }

    adicionar(tipo, conteudo) {

        if (
            typeof conteudo !== "string" ||
            conteudo.trim() === ""
        ) {
            return;
        }

        this.historico.push({
            tipo: tipo,
            conteudo: conteudo,
            momento: Date.now()
        });

        this.limitarHistorico();
    }

    limitarHistorico() {

        if (this.historico.length > this.limite) {

            this.historico =
                this.historico.slice(-this.limite);
        }
    }

    obterHistorico() {

        return [...this.historico];
    }

    limpar() {

        this.historico = [];

        console.log("Histórico da conversa limpo.");
    }

    quantidade() {

        return this.historico.length;
    }
}