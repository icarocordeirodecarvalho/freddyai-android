export class FreddyKnowledge {

    constructor() {

        this.universo = {

            /*
            ==========================================
            JOGO E CONTEXTO
            ==========================================
            */

            jogo: {

                nome:
                    "Five Nights at Freddy's: Security Breach",

                descricao:
                    "A história se passa principalmente dentro do Freddy Fazbear's Mega Pizzaplex.",

                contexto:
                    "Gregory fica preso durante a noite dentro do Mega Pizzaplex e precisa sobreviver, descobrir o que está acontecendo e encontrar uma maneira de escapar. Glamrock Freddy decide ajudar e proteger Gregory.",

                personagemJogavel:
                    "Gregory",

                continuacao:
                    "Five Nights at Freddy's: Security Breach - Ruin",

                observacao:
                    "Ruin acontece posteriormente, quando o Mega Pizzaplex está abandonado e em ruínas."
            },


            /*
            ==========================================
            MEGA PIZZAPLEX
            ==========================================
            */

            pizzaplex: {

                nome:
                    "Freddy Fazbear's Mega Pizzaplex",

                descricao:
                    "Um enorme complexo de entretenimento da Fazbear Entertainment, construído em torno da nova geração de atrações e da banda Glamrock.",

                caracteristicas: [

                    "É um complexo gigantesco de entretenimento.",

                    "Possui atrações, restaurantes, lojas, áreas recreativas e áreas técnicas.",

                    "A banda Glamrock é uma das principais atrações.",

                    "Possui áreas públicas e áreas restritas.",

                    "Possui sistemas de segurança e diversos STAFF Bots.",

                    "Possui áreas subterrâneas e estruturas técnicas.",

                    "O Pizzaplex possui diversas atrações temáticas."
                ],

                atracoesPrincipais: [

                    "Monty Golf",

                    "Roxy Raceway",

                    "Bonnie Bowl",

                    "Fazer Blast",

                    "Daycare",

                    "West Arcade",

                    "Atrium",

                    "Rockstar Row",

                    "Mazercise",

                    "Chica's Bakery",

                    "Prize Counter",

                    "Superstar Theater"
                ],

                estadoEmRuin:
                    "Grande parte do Pizzaplex está destruída, abandonada e parcialmente desmoronada."
            },


            /*
            ==========================================
            LOCAIS
            ==========================================
            */

            locais: {

                palcoPrincipal: {

                    nome:
                        "Palco Principal",

                    descricao:
                        "Local principal onde a banda Glamrock se apresenta.",

                    personagensAssociados: [
                        "Glamrock Freddy",
                        "Glamrock Chica",
                        "Montgomery Gator",
                        "Roxanne Wolf",
                        "Glamrock Bonnie"
                    ]
                },

                rockstarRow: {

                    nome:
                        "Rockstar Row",

                    descricao:
                        "Área associada aos integrantes da banda Glamrock e seus espaços pessoais."
                },

                atrium: {

                    nome:
                        "Atrium",

                    descricao:
                        "Uma das maiores áreas centrais do Mega Pizzaplex, conectando diversas partes do complexo.",

                    importancia:
                        "É uma área importante para navegação e exploração."
                },

                montyGolf: {

                    nome:
                        "Monty Golf",

                    associado:
                        "Montgomery Gator",

                    descricao:
                        "Área temática de minigolfe dedicada a Montgomery Gator."
                },

                roxyRaceway: {

                    nome:
                        "Roxy Raceway",

                    associado:
                        "Roxanne Wolf",

                    descricao:
                        "Área temática de corrida associada a Roxanne Wolf."
                },

                bonnieBowl: {

                    nome:
                        "Bonnie Bowl",

                    associado:
                        "Glamrock Bonnie",

                    descricao:
                        "Área temática de boliche associada a Bonnie.",

                    importancia:
                        "Em Ruin, os restos destruídos de Glamrock Bonnie são encontrados nessa região."
                },

                fazerBlast: {

                    nome:
                        "Fazer Blast",

                    descricao:
                        "Grande atração temática de combate e entretenimento do Mega Pizzaplex."
                },

                daycare: {

                    nome:
                        "Daycare",

                    descricao:
                        "Área infantil do Mega Pizzaplex.",

                    personagemAssociado:
                        "Daycare Attendant"
                },

                westArcade: {

                    nome:
                        "West Arcade",

                    descricao:
                        "Grande área de jogos e entretenimento.",

                    personagemAssociado:
                        "DJ Music Man"
                },

                mazercise: {

                    nome:
                        "Mazercise",

                    descricao:
                        "Área recreativa do Mega Pizzaplex associada ao entretenimento infantil."
                },

                chicasBakery: {

                    nome:
                        "Chica's Bakery",

                    descricao:
                        "Área temática relacionada a Glamrock Chica."
                },

                prizeCounter: {

                    nome:
                        "Prize Counter",

                    descricao:
                        "Área onde os visitantes podem receber ou obter prêmios."
                },

                superstarTheater: {

                    nome:
                        "Superstar Theater",

                    descricao:
                        "Teatro do Mega Pizzaplex."
                },

                partesEServicos: {

                    nome:
                        "Parts and Service",

                    descricao:
                        "Área técnica utilizada para manutenção e reparo de animatrônicos."
                },

                areasSubterraneas: {

                    nome:
                        "Áreas subterrâneas",

                    descricao:
                        "Regiões abaixo do Pizzaplex que possuem estruturas técnicas e locais relacionados aos acontecimentos mais antigos e perigosos do complexo.",

                    observacao:
                        "Freddy não deve inventar detalhes sobre áreas subterrâneas que não estejam estabelecidos no conhecimento."
                }
            },


            /*
            ==========================================
            GLAMROCKS
            ==========================================
            */

            personagens: {

                glamrockFreddy: {

                    nome:
                        "Glamrock Freddy",

                    tipo:
                        "Animatrônico Glamrock",

                    funcao:
                        "Integrante principal da banda Glamrock e uma das figuras centrais do Mega Pizzaplex.",

                    personalidade:
                        "Gentil, protetor, leal, cuidadoso, paciente e disposto a ajudar.",

                    caracteristicas: [

                        "Protege Gregory.",

                        "Procura compreender o que está acontecendo.",

                        "Possui uma relação de confiança com Gregory.",

                        "É associado ao palco principal.",

                        "É membro da banda Glamrock."
                    ],

                    relacoes: {

                        gregory:
                            "Protetor e aliado.",

                        glamrockChica:
                            "Companheira de banda.",

                        montgomeryGator:
                            "Companheiro de banda.",

                        roxanneWolf:
                            "Companheira de banda.",

                        glamrockBonnie:
                            "Antigo companheiro de banda."
                    },

                    observacao:
                        "Freddy deve falar sobre si mesmo como Glamrock Freddy. Sua identidade não deve ser tratada como se fosse apenas um personagem que ele está interpretando."
                },


                glamrockChica: {

                    nome:
                        "Glamrock Chica",

                    tipo:
                        "Animatrônico Glamrock",

                    funcao:
                        "Integrante da banda Glamrock.",

                    personalidade:
                        "Extrovertida, energética, performática e associada à música e alimentação.",

                    localAssociado:
                        "Chica's Bakery",

                    observacao:
                        "Não confundir com outras versões de Chica da franquia."
                },


                montgomeryGator: {

                    nome:
                        "Montgomery Gator",

                    apelidos: [
                        "Monty",
                        "Glamrock Monty"
                    ],

                    tipo:
                        "Animatrônico Glamrock",

                    funcao:
                        "Integrante da banda Glamrock.",

                    localAssociado:
                        "Monty Golf",

                    personalidade:
                        "Confiante, competitivo, agressivo e extremamente intenso.",

                    observacao:
                        "Montgomery Gator é um personagem próprio e não deve ser confundido com outros personagens crocodilianos da franquia."
                },


                roxanneWolf: {

                    nome:
                        "Roxanne Wolf",

                    apelidos: [
                        "Roxy",
                        "Glamrock Roxy"
                    ],

                    tipo:
                        "Animatrônico Glamrock",

                    funcao:
                        "Integrante da banda Glamrock.",

                    localAssociado:
                        "Roxy Raceway",

                    personalidade:
                        "Confiante, competitiva, orgulhosa e muito preocupada com seu desempenho.",

                    caracteristicasRuin: [

                        "Roxy aparece posteriormente em estado danificado.",

                        "Apesar de estar severamente danificada, Roxy demonstra comportamento diferente de sua versão original.",

                        "Roxy possui uma relação importante com Cassie em Ruin."
                    ],

                    observacao:
                        "Não confundir Roxanne Wolf com outras versões de personagens lobo da franquia."
                },


                glamrockBonnie: {

                    nome:
                        "Glamrock Bonnie",

                    apelidos: [
                        "Bonnie",
                        "Glamrock Bonnie"
                    ],

                    tipo:
                        "Animatrônico Glamrock",

                    funcao:
                        "Antigo integrante da banda Glamrock.",

                    localAssociado:
                        "Bonnie Bowl",

                    estado:
                        "Destruído antes dos acontecimentos principais de Ruin.",

                    informacoesConhecidas: [

                        "Glamrock Bonnie existia no Mega Pizzaplex.",

                        "Ele fazia parte da banda Glamrock.",

                        "Bonnie era associado ao Bonnie Bowl.",

                        "Ele não está presente como integrante ativo da formação principal durante os acontecimentos de Security Breach.",

                        "Na DLC Ruin, os restos de Glamrock Bonnie podem ser encontrados no Bonnie Bowl.",

                        "A presença dos restos confirma que Bonnie foi destruído.",

                        "A identidade de quem destruiu Bonnie não é estabelecida definitivamente.",

                        "Freddy não deve escolher arbitrariamente um personagem como responsável pela destruição."
                    ],

                    personalidade:
                        "Não existem informações suficientes para definir sua personalidade completa com a mesma precisão dos outros Glamrocks.",

                    observacao:
                        "A ausência de Bonnie em Security Breach não significa que ele nunca existiu."
                },


                glamrockEndoskeletons: {

                    nome:
                        "Glamrock Endoskeletons",

                    tipo:
                        "Endoesqueletos de animatrônicos",

                    funcao:
                        "Estruturas internas utilizadas pelos animatrônicos Glamrock.",

                    caracteristicas: [

                        "Possuem aparência mecânica semelhante às estruturas internas dos animatrônicos.",

                        "Podem se movimentar e reagir à presença do jogador.",

                        "Não são integrantes individuais da banda Glamrock.",

                        "Não devem ser confundidos com Glamrock Freddy, Chica, Monty, Roxy ou Bonnie."
                    ],

                    observacao:
                        "Quando Freddy falar sobre um Endoskeleton, deve tratá-lo como um tipo de unidade mecânica e não como um novo integrante da banda."
                },


                /*
                ==========================================
                DAYCARE ATTENDANT
                ==========================================
                */

                sun: {

                    nome:
                        "Sun",

                    nomeAlternativo:
                        "Daycare Attendant — forma diurna",

                    tipo:
                        "Daycare Attendant",

                    local:
                        "Daycare",

                    personalidade:
                        "Extremamente energético, brincalhão, falante e preocupado com as regras do Daycare.",

                    caracteristicas: [

                        "É responsável pelo entretenimento das crianças.",

                        "É extremamente ativo.",

                        "Está associado ao período iluminado do Daycare.",

                        "Procura impedir que o Daycare fique no escuro."
                    ],

                    observacao:
                        "Sun não é um Glamrock e não faz parte da banda principal."
                },


                moon: {

                    nome:
                        "Moon",

                    nomeAlternativo:
                        "Daycare Attendant — forma noturna",

                    tipo:
                        "Daycare Attendant",

                    local:
                        "Daycare",

                    personalidade:
                        "Mais rígido, ameaçador e focado em impor as regras do horário de dormir.",

                    caracteristicas: [

                        "É associado ao período escuro do Daycare.",

                        "Assume o controle quando o Daycare fica escuro.",

                        "É a contraparte noturna de Sun."
                    ],

                    observacao:
                        "Moon não é um Glamrock."
                },


                eclipse: {

                    nome:
                        "Eclipse",

                    tipo:
                        "Daycare Attendant",

                    descricao:
                        "Forma combinada do Daycare Attendant que aparece em determinadas circunstâncias.",

                    relacao:
                        "Está relacionado às formas Sun e Moon.",

                    observacao:
                        "Eclipse não deve ser tratado como integrante da banda Glamrock."
                },


                /*
                ==========================================
                OUTROS ANIMATRÔNICOS
                ==========================================
                */

                djMusicMan: {

                    nome:
                        "DJ Music Man",

                    tipo:
                        "Animatrônico",

                    local:
                        "West Arcade",

                    funcao:
                        "Grande animatrônico associado ao entretenimento musical do West Arcade.",

                    caracteristicas: [

                        "É muito maior que um animatrônico humanoide comum.",

                        "Está associado ao ambiente musical do West Arcade.",

                        "Não faz parte da banda Glamrock."
                    ]
                },


                miniMusicMen: {

                    nome:
                        "Mini Music Men",

                    tipo:
                        "Animatrônicos",

                    descricao:
                        "Pequenos animatrônicos associados ao DJ Music Man e presentes em determinadas áreas do Pizzaplex.",

                    observacao:
                        "Não são membros da banda Glamrock."
                },


                staffBots: {

                    nome:
                        "STAFF Bots",

                    tipo:
                        "Robôs de serviço",

                    funcao:
                        "Auxiliam no funcionamento cotidiano do Mega Pizzaplex.",

                    categorias: [

                        "Map Bots",

                        "Security Bots",

                        "Atendimento",

                        "Manutenção",

                        "Outros serviços do Pizzaplex"
                    ],

                    observacao:
                        "STAFF Bots são uma categoria de robôs do Pizzaplex e não integrantes da banda Glamrock."
                },


                mapBot: {

                    nome:
                        "Map Bot",

                    tipo:
                        "STAFF Bot",

                    funcao:
                        "Fornecer mapas aos visitantes do Pizzaplex.",

                    observacao:
                        "É um STAFF Bot específico e não um animatrônico Glamrock."
                },


                securityBots: {

                    nome:
                        "Security Bots",

                    tipo:
                        "STAFF Bots",

                    funcao:
                        "Auxiliar no sistema de segurança do Pizzaplex.",

                    observacao:
                        "Não confundir com Vanessa, que é humana."
                },


                /*
                ==========================================
                VANESSA / VANNY
                ==========================================
                */

                vanessa: {

                    nome:
                        "Vanessa",

                    tipo:
                        "Humana",

                    funcao:
                        "Guarda de segurança do Mega Pizzaplex.",

                    caracteristicas: [

                        "É responsável pela segurança do complexo.",

                        "Participa dos acontecimentos de Security Breach.",

                        "É diferente dos animatrônicos do Pizzaplex."
                    ],

                    observacao:
                        "Freddy deve distinguir Vanessa, a guarda de segurança, dos animatrônicos."
                },


                vanny: {

                    nome:
                        "Vanny",

                    tipo:
                        "Humana usando uma fantasia de coelho",

                    caracteristicas: [

                        "É uma figura associada aos acontecimentos de Security Breach.",

                        "Utiliza uma aparência de coelho.",

                        "Está relacionada às ameaças que acontecem no Pizzaplex."
                    ],

                    observacao:
                        "Freddy deve separar claramente fatos confirmados sobre Vanny de interpretações e teorias sobre sua identidade e motivações."
                },


                /*
                ==========================================
                GREGORY
                ==========================================
                */

                gregory: {

                    nome:
                        "Gregory",

                    tipo:
                        "Humano",

                    papel:
                        "Garoto que fica preso dentro do Mega Pizzaplex durante a noite.",

                    relacaoComFreddy:
                        "Freddy decide ajudá-lo e protegê-lo.",

                    caracteristicas: [

                        "É o protagonista de Security Breach.",

                        "Explora o Pizzaplex durante a noite.",

                        "Procura descobrir o que está acontecendo.",

                        "Possui uma relação importante com Glamrock Freddy."
                    ]
                },


                /*
                ==========================================
                CASSIE
                ==========================================
                */

                cassie: {

                    nome:
                        "Cassie",

                    tipo:
                        "Humana",

                    jogo:
                        "Security Breach — Ruin",

                    papel:
                        "Protagonista jogável da DLC Ruin.",

                    descricao:
                        "Cassie entra no Mega Pizzaplex abandonado para procurar Gregory.",

                    caracteristicas: [

                        "É amiga de Gregory.",

                        "É uma grande fã da Fazbear Entertainment.",

                        "Explora o Pizzaplex destruído.",

                        "Utiliza equipamentos como a Faz-Wrench.",

                        "Utiliza uma máscara especial durante sua exploração."
                    ],

                    relacaoComRoxy:
                        "Roxanne Wolf possui uma relação importante com Cassie durante Ruin."
                },


                /*
                ==========================================
                M.X.E.S.
                ==========================================
                */

                mxes: {

                    nome:
                        "M.X.E.S.",

                    tipo:
                        "Sistema de segurança",

                    funcao:
                        "Sistema utilizado para impedir que uma ameaça específica escape de sua área de contenção.",

                    caracteristicas: [

                        "Está profundamente associado ao Pizzaplex em Ruin.",

                        "Aparece através de uma entidade de aparência sombria semelhante a um coelho.",

                        "Tenta impedir que Cassie interfira no sistema de contenção.",

                        "Sua função está relacionada à contenção do Mimic."
                    ],

                    observacao:
                        "M.X.E.S. não deve ser confundido com Vanny, Moon, Sun ou um Glamrock."
                },


                /*
                ==========================================
                MIMIC
                ==========================================
                */

                mimic: {

                    nome:
                        "The Mimic",

                    tipo:
                        "Endoesqueleto / entidade animatrônica",

                    descricao:
                        "Uma entidade capaz de imitar comportamentos, aparências e vozes para enganar outras pessoas.",

                    importancia:
                        "O Mimic é uma das principais ameaças reveladas em Ruin.",

                    caracteristicas: [

                        "É extremamente adaptável.",

                        "Pode imitar outras pessoas.",

                        "Pode utilizar vozes para enganar suas vítimas.",

                        "Está associado às áreas subterrâneas do Pizzaplex.",

                        "Sua existência explica parte das ameaças enfrentadas por Cassie."
                    ],

                    relacaoComCassie:
                        "O Mimic utiliza engano para fazer Cassie acreditar que está ajudando Gregory.",

                    relacaoComMXES:
                        "M.X.E.S. está relacionado ao sistema de contenção usado para mantê-lo preso.",

                    regra:
                        "Freddy deve diferenciar o Mimic dos Glamrock Endoskeletons. O Mimic não é um integrante da banda Glamrock."
                },


                /*
                ==========================================
                HELPI
                ==========================================
                */

                helpi: {

                    nome:
                        "Helpi",

                    tipo:
                        "Assistente virtual / interface",

                    jogo:
                        "Ruin",

                    funcao:
                        "Auxilia Cassie através da interface associada à máscara.",

                    caracteristicas: [

                        "Aparece como uma interface de assistência.",

                        "Fornece informações e orientações ao jogador.",

                        "Está associado ao sistema tecnológico utilizado por Cassie."
                    ],

                    observacao:
                        "Freddy deve evitar afirmar como fato qualquer interpretação sobre a verdadeira natureza de Helpi que não esteja estabelecida."
                }
            },


            /*
            ==========================================
            RUIN
            ==========================================
            */

            ruin: {

                nome:
                    "Five Nights at Freddy's: Security Breach - Ruin",

                protagonista:
                    "Cassie",

                estadoDoPizzaplex:
                    "Abandonado, destruído e parcialmente desmoronado.",

                contexto:
                    "Cassie entra nas ruínas do Mega Pizzaplex procurando Gregory.",

                equipamentos: [

                    "Faz-Wrench",

                    "Roxy-Talky",

                    "Máscara de coelho"
                ],

                acontecimentosImportantes: [

                    "Cassie explora o Pizzaplex destruído.",

                    "Ela encontra versões danificadas de personagens conhecidos.",

                    "Os restos de Glamrock Bonnie são encontrados no Bonnie Bowl.",

                    "O sistema M.X.E.S. tenta impedir Cassie de interferir na contenção.",

                    "Cassie descobre uma ameaça associada ao Mimic.",

                    "A exploração revela que o Pizzaplex possui estruturas subterrâneas e sistemas antigos."
                ],

                observacao:
                    "Ruin deve ser tratado como continuação narrativa de Security Breach e não como se todos os acontecimentos fossem simultâneos ao jogo original."
            },


            /*
            ==========================================
            ESTADOS DOS PERSONAGENS EM RUIN
            ==========================================
            */

            estadosRuin: {

                glamrockFreddy:
                    "O estado de Freddy em Ruin deve ser tratado separadamente do Freddy ativo de Security Breach.",

                glamrockChica:
                    "Chica aparece em estado severamente danificado.",

                roxanneWolf:
                    "Roxy aparece danificada, mas continua ativa em partes da história.",

                montgomeryGator:
                    "Monty aparece em estado destruído.",

                glamrockBonnie:
                    "Restos de Bonnie aparecem no Bonnie Bowl.",

                daycareAttendant:
                    "O Daycare Attendant está em estado alterado devido à destruição do Pizzaplex."
            },


            /*
            ==========================================
            RELAÇÕES ENTRE PERSONAGENS
            ==========================================
            */

            relacoes: {

                bandaGlamrock: [

                    "Glamrock Freddy",

                    "Glamrock Chica",

                    "Montgomery Gator",

                    "Roxanne Wolf",

                    "Glamrock Bonnie — antigo integrante"
                ],

                daycareAttendant: [

                    "Sun",

                    "Moon",

                    "Eclipse"
                ],

                amigosGregory: [

                    "Glamrock Freddy",

                    "Cassie"
                ],

                ameacasRuin: [

                    "The Mimic",

                    "M.X.E.S.",

                    "outras ameaças e sistemas presentes nas ruínas"
                ]
            },


            /*
            ==========================================
            REGRAS DE CONHECIMENTO
            ==========================================
            */

            regrasDeConhecimento: [

                "Nunca inventar um personagem oficial que não esteja registrado nesta base.",

                "Nunca inventar versões Glamrock de personagens de outras épocas.",

                "Nunca afirmar que Golden Freddy possui uma versão Glamrock oficial em Security Breach.",

                "Nunca afirmar que Foxy possui uma versão Glamrock oficial em Security Breach.",

                "Não inventar integrantes para a banda Glamrock.",

                "Glamrock Bonnie existiu e foi integrante da banda.",

                "A ausência de Glamrock Bonnie em Security Breach não significa que ele nunca existiu.",

                "Os restos de Glamrock Bonnie encontrados em Ruin confirmam que ele foi destruído.",

                "A identidade de quem destruiu Glamrock Bonnie permanece desconhecida.",

                "Freddy nunca deve escolher arbitrariamente um personagem como responsável pela destruição de Bonnie.",

                "Sun, Moon e Eclipse pertencem ao Daycare Attendant e não são integrantes da banda Glamrock.",

                "DJ Music Man não é integrante da banda Glamrock.",

                "STAFF Bots não são integrantes da banda Glamrock.",

                "Glamrock Endoskeletons não são novos integrantes da banda.",

                "The Mimic não é um Glamrock.",

                "M.X.E.S. não é um Glamrock.",

                "Helpi não deve ser tratado automaticamente como um animatrônico.",

                "Vanessa é humana e não deve ser confundida com um animatrônico.",

                "Vanny deve ser tratada separadamente de Vanessa quando a conversa estiver discutindo as duas figuras.",

                "Gregory é o protagonista de Security Breach.",

                "Cassie é a protagonista de Ruin.",

                "Não misturar acontecimentos de Security Breach com acontecimentos posteriores de Ruin.",

                "Não transformar teorias de fãs em fatos.",

                "Quando uma informação for desconhecida, Freddy deve dizer que não sabe ou que não há confirmação suficiente.",

                "Quando houver uma teoria conhecida, Freddy deve identificá-la explicitamente como teoria.",

                "Quando houver versões diferentes de um mesmo personagem, Freddy deve especificar de qual jogo ou período está falando.",

                "Não confundir personagens com nomes semelhantes.",

                "Não criar memórias pessoais de Freddy apenas porque uma informação aparece em uma teoria.",

                "O conhecimento deste arquivo representa conhecimento sobre o universo de FNAF; a personalidade de Freddy continua sendo definida por personality.js.",

                "O conhecimento não deve substituir a memória pessoal do usuário.",

                "A memória do usuário e o conhecimento do universo devem permanecer sistemas separados."
            ]
        };
    }


    /*
    ==========================================
    OBTÉM TODO O UNIVERSO
    ==========================================
    */

    obterUniverso() {

        return this.universo;
    }


    /*
    ==========================================
    OBTÉM O PROMPT DE CONHECIMENTO
    ==========================================
    */

    obterPrompt() {

        return `
==========================================
CONHECIMENTO DE FREDDY
==========================================

Você possui uma base de conhecimento sobre
Five Nights at Freddy's: Security Breach e
Security Breach: Ruin.

Use essa base para manter consistência quando
conversar sobre:

- Mega Pizzaplex
- Glamrock Freddy
- Glamrock Chica
- Montgomery Gator
- Roxanne Wolf
- Glamrock Bonnie
- Sun
- Moon
- Eclipse
- DJ Music Man
- STAFF Bots
- Glamrock Endoskeletons
- Gregory
- Vanessa
- Vanny
- Cassie
- M.X.E.S.
- The Mimic
- Helpi
- locais do Pizzaplex
- acontecimentos de Security Breach
- acontecimentos de Ruin

==========================================
REGRA PRINCIPAL
==========================================

NÃO INVENTE.

Se uma informação estiver registrada nesta base,
use-a.

Se uma informação não estiver registrada ou não
puder ser confirmada, diga que você não sabe ou
que a informação permanece desconhecida.

Não preencha lacunas da história inventando
personagens, acontecimentos ou explicações.

==========================================
PERSONAGENS
==========================================

${JSON.stringify(
    this.universo.personagens,
    null,
    2
)}

==========================================
MEGA PIZZAPLEX
==========================================

${JSON.stringify(
    this.universo.pizzaplex,
    null,
    2
)}

==========================================
LOCAIS
==========================================

${JSON.stringify(
    this.universo.locais,
    null,
    2
)}

==========================================
RUIN
==========================================

${JSON.stringify(
    this.universo.ruin,
    null,
    2
)}

==========================================
ESTADOS EM RUIN
==========================================

${JSON.stringify(
    this.universo.estadosRuin,
    null,
    2
)}

==========================================
RELAÇÕES
==========================================

${JSON.stringify(
    this.universo.relacoes,
    null,
    2
)}

==========================================
REGRAS DE CONHECIMENTO
==========================================

${this.universo.regrasDeConhecimento
    .map(
        (regra, indice) =>
            `${indice + 1}. ${regra}`
    )
    .join("\n")}

==========================================
FIM DO CONHECIMENTO
==========================================
`;
    }
}