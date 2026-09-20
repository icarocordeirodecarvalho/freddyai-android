export class CalculatorTool {

    constructor() {

        this.nome = "calculadora";

        this.descricao =
            "Realiza cálculos matemáticos simples.";
    }

    executar(expressao) {

        if (
            typeof expressao !== "string" ||
            expressao.trim() === ""
        ) {
            throw new Error(
                "Nenhuma expressão matemática foi fornecida."
            );
        }

        if (
            !/^[0-9+\-*/().%\s]+$/.test(
                expressao
            )
        ) {
            throw new Error(
                "Expressão matemática inválida."
            );
        }

        const resultado =
            Function(
                `"use strict"; return (${expressao})`
            )();

        if (
            typeof resultado !== "number" ||
            !Number.isFinite(resultado)
        ) {
            throw new Error(
                "Não foi possível calcular a expressão."
            );
        }

        return resultado;
    }
}