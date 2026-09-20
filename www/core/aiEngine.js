export class AIEngine {

    constructor() {

        this.servidor =
            "http://localhost:3000";

        console.log(
            "AIEngine iniciado."
        );
    }

    async responder(contexto) {

        console.log(
            "AIEngine recebeu o contexto:",
            contexto
        );

        if (
            !contexto ||
            typeof contexto !== "object"
        ) {
            throw new Error(
                "Contexto inválido."
            );
        }

        const mensagem =
            contexto.mensagem;

        if (
            typeof mensagem !== "string" ||
            mensagem.trim() === ""
        ) {
            throw new Error(
                "Mensagem inválida."
            );
        }

        const resposta =
            await fetch(
                `${this.servidor}/chat`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        mensagem:
                            mensagem,

                        contexto:
                            contexto,

                        imagem:
                            contexto.imagem || null,

                        ferramentas:
                            contexto.ferramentas || []
                    })
                }
            );

        console.log(
            "AIEngine recebeu HTTP:",
            resposta.status
        );

        if (!resposta.ok) {

            throw new Error(
                `Servidor respondeu HTTP ${resposta.status}.`
            );
        }

        const dados =
            await resposta.json();

        console.log(
            "AIEngine recebeu do servidor:",
            dados
        );

        if (
            !dados ||
            typeof dados.resposta !== "string"
        ) {

            throw new Error(
                "O servidor não retornou uma resposta válida."
            );
        }

        return {

            resposta:
                dados.resposta
        };
    }
}