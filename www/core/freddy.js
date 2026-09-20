import { AIEngine } from "./aiEngine.js";
import { FreddyPersonality } from "./personality.js";
import { FreddyKnowledge } from "./freddyKnowledge.js";
import { ConversationManager } from "./conversationManager.js";
import { MemoryManager } from "./memoryManager.js";
import { Memory } from "./memory.js";
import { ToolManager } from "./toolManager.js";

export class FreddyCore {

    constructor() {

        console.log("FreddyCore iniciado.");

        this.ia =
            new AIEngine();

        this.personalidade =
            new FreddyPersonality();

        this.conhecimento =
            new FreddyKnowledge();

        this.conversa =
            new ConversationManager(20);

        this.memoria =
            new MemoryManager();

        this.analisadorMemoria =
            new Memory();

        this.ferramentas =
            new ToolManager();
    }

    async responder(
        mensagem,
        imagem = null
    ) {

        console.log(
            "FreddyCore recebeu:",
            mensagem
        );

        if (
            typeof mensagem !== "string" ||
            mensagem.trim() === ""
        ) {
            throw new Error(
                "Mensagem inválida."
            );
        }

        /*
        ==========================================
        1. GUARDA NA CONVERSA ATUAL
        ==========================================
        */

        this.conversa.adicionarUsuario(
            mensagem
        );

        /*
        ==========================================
        2. ANALISA SE EXISTE UMA NOVA MEMÓRIA
        ==========================================
        */

        const analise =
            await this.analisadorMemoria.analisar(
                mensagem
            );

        console.log(
            "Análise de memória:",
            analise
        );

        /*
        ==========================================
        3. SALVA A MEMÓRIA SE FOR VÁLIDA
        ==========================================
        */

        if (
            analise.categoria !== "nenhuma" &&
            typeof analise.memoria === "string" &&
            analise.memoria.trim() !== ""
        ) {

            this.memoria.adicionar(
                analise.categoria,
                analise.memoria
            );

            console.log(
                "Memória adicionada ao Freddy."
            );
        }

        /*
        ==========================================
        4. OBTÉM TODAS AS MEMÓRIAS
        ==========================================
        */

        const memorias =
            this.memoria.obterTodas();

        /*
        ==========================================
        5. OBTÉM AS FERRAMENTAS
        ==========================================
        */

        const ferramentas =
            this.ferramentas.obterDescricoes();

        /*
        ==========================================
        6. MONTA O CONTEXTO
        ==========================================
        */

        const contexto = {

            mensagem:
                mensagem,

            identidade:
                this.personalidade.obterPrompt(),

            conhecimento:
                this.conhecimento.obterPrompt(),

            historico:
                this.conversa.obterHistorico(),

            memoria:
                memorias,

            ferramentas:
                ferramentas,

            imagem:
                imagem
        };

        /*
        ==========================================
        7. ENVIA PARA A INTELIGÊNCIA
        ==========================================
        */

        const resultado =
            await this.ia.responder(
                contexto
            );

        console.log(
            "FreddyCore recebeu da IA:",
            resultado
        );

        if (
            !resultado ||
            typeof resultado.resposta !== "string"
        ) {
            throw new Error(
                "AIEngine não retornou uma resposta válida."
            );
        }

        /*
        ==========================================
        8. GUARDA A RESPOSTA NA CONVERSA
        ==========================================
        */

        this.conversa.adicionarFreddy(
            resultado.resposta
        );

        return resultado.resposta;
    }


    /*
    ==========================================
    FERRAMENTAS
    ==========================================
    */

    obterFerramentas() {

        return this.ferramentas.obterTodas();
    }

    executarFerramenta(
        nome,
        argumentos
    ) {

        const ferramenta =
            this.ferramentas.obter(nome);

        if (!ferramenta) {

            throw new Error(
                `Ferramenta "${nome}" não encontrada.`
            );
        }

        if (nome === "calculadora") {

            return ferramenta.executar(
                argumentos?.expressao
            );
        }

        return ferramenta.executar(
            argumentos
        );
    }


    /*
    ==========================================
    CONHECIMENTO
    ==========================================
    */

    obterConhecimento() {

        return this.conhecimento.obterUniverso();
    }


    /*
    ==========================================
    MEMÓRIA
    ==========================================
    */

    adicionarMemoria(
        categoria,
        conteudo
    ) {

        return this.memoria.adicionar(
            categoria,
            conteudo
        );
    }

    obterMemorias() {

        return this.memoria.obterTodas();
    }

    removerMemoria(id) {

        return this.memoria.remover(id);
    }

    limparMemorias() {

        this.memoria.limpar();
    }


    /*
    ==========================================
    HISTÓRICO
    ==========================================
    */

    obterHistorico() {

        return this.conversa.obterHistorico();
    }

    limparHistorico() {

        this.conversa.limpar();
    }
}