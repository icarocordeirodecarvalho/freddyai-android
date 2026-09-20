import { CalculatorTool } from "./calculatorTool.js";

export class ToolManager {

    constructor() {

        this.ferramentas = {};

        this.registrar(
            "calculadora",
            new CalculatorTool()
        );

        console.log(
            "ToolManager iniciado."
        );
    }

    registrar(nome, ferramenta) {

        if (
            typeof nome !== "string" ||
            nome.trim() === ""
        ) {
            throw new Error(
                "Nome de ferramenta inválido."
            );
        }

        if (
            !ferramenta ||
            typeof ferramenta.executar !== "function"
        ) {
            throw new Error(
                "Ferramenta inválida."
            );
        }

        this.ferramentas[nome] =
            ferramenta;

        console.log(
            `Ferramenta registrada: ${nome}`
        );
    }

    obter(nome) {

        return this.ferramentas[nome];
    }

    obterTodas() {

        return {
            ...this.ferramentas
        };
    }

    obterDescricoes() {

        return Object.values(
            this.ferramentas
        ).map(ferramenta => ({

            nome:
                ferramenta.nome,

            descricao:
                ferramenta.descricao
        }));
    }

    possui(nome) {

        return Object.prototype.hasOwnProperty.call(
            this.ferramentas,
            nome
        );
    }

    remover(nome) {

        if (!this.possui(nome)) {
            return false;
        }

        delete this.ferramentas[nome];

        return true;
    }

    limpar() {

        this.ferramentas = {};

        console.log(
            "Todas as ferramentas foram removidas."
        );
    }

    quantidade() {

        return Object.keys(
            this.ferramentas
        ).length;
    }
}