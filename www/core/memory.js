export class Memory {

    constructor() {

        this.servidor = "http://localhost:3000";

        console.log("Memory iniciado.");
    }

    async analisar(mensagem) {

        if (
            typeof mensagem !== "string" ||
            mensagem.trim() === ""
        ) {
            return {
                categoria: "nenhuma",
                memoria: ""
            };
        }

        try {

            const resposta = await fetch(
                `${this.servidor}/analisar`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        mensagem: mensagem
                    })
                }
            );

            if (!resposta.ok) {

                throw new Error(
                    `Servidor respondeu HTTP ${resposta.status}.`
                );
            }

            const dados = await resposta.json();

            if (
                !dados ||
                typeof dados.categoria !== "string" ||
                typeof dados.memoria !== "string"
            ) {

                throw new Error(
                    "Resposta do analisador inválida."
                );
            }

            console.log(
                "Resultado da análise de memória:",
                dados
            );

            return dados;

        } catch (erro) {

            console.error(
                "Erro ao analisar memória:",
                erro
            );

            return {
                categoria: "nenhuma",
                memoria: ""
            };
        }
    }
}