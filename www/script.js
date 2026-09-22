import { FreddyCore } from "./core/freddy.js";


const freddy = new FreddyCore();


/*
==========================================
ELEMENTOS DA INTERFACE
==========================================
*/

const input =
    document.getElementById("messageInput");

const chat =
    document.getElementById("chat");

const form =
    document.getElementById("inputArea");

const sendButton =
    document.getElementById("sendButton");

const microphoneButton =
    document.getElementById("microphoneButton");

const cameraButton =
    document.getElementById("cameraButton");
const androidButton =
    document.getElementById("androidButton");

const visionMenu =
    document.getElementById("visionMenu");

const closeVisionMenu =
    document.getElementById("closeVisionMenu");

const visionUpdateButton =
    document.getElementById("visionUpdateButton");

const visionContinuousButton =
    document.getElementById("visionContinuousButton");


/*
==========================================
SISTEMA DE IMAGEM
==========================================
*/

const cameraInput =
    document.getElementById("cameraInput");

const galleryInput =
    document.getElementById("galleryInput");

const imageMenu =
    document.getElementById("imageMenu");

const openCameraButton =
    document.getElementById("openCameraButton");

const openGalleryButton =
    document.getElementById("openGalleryButton");

const closeImageMenu =
    document.getElementById("closeImageMenu");


/*
==========================================
FREDDY
==========================================
*/

const freddyIdle =
    document.getElementById("freddyIdle");

const freddySpeaking =
    document.getElementById("freddySpeaking");


/*
==========================================
FRAMES
==========================================
*/

const frames = {

    1:
        "./icons/animation/1Freddy Animation.png",

    2:
        "./icons/animation/2Freddy Animation.png",

    3:
        "./icons/animation/3Freddy Animation.png",

    4:
        "./icons/animation/4Freddy Animation.png"

};


const framesCarregados = {};


function carregarFrame(numero) {

    return new Promise(
        function(resolve) {

            const imagem =
                new Image();


            imagem.onload =
                function() {

                    framesCarregados[numero] =
                        imagem;

                    resolve(true);
                };


            imagem.onerror =
                function() {

                    console.warn(
                        "Não foi possível carregar o frame:",
                        numero,
                        frames[numero]
                    );

                    resolve(false);
                };


            imagem.src =
                frames[numero];
        }
    );
}


async function carregarTodosOsFrames() {

    await Promise.all([

        carregarFrame(1),
        carregarFrame(2),
        carregarFrame(3),
        carregarFrame(4)

    ]);


    console.log(
        "Frames de Freddy carregados."
    );
}


/*
==========================================
CONFIGURAÇÕES
==========================================
*/

const TEMPO_FRAME = 500;

const TEMPO_DIGITACAO = 35;


/*
IDLE:

1 → 1 → 2 → 1 → 1 → repete
*/

const sequenciaIdle = [

    1,
    1,
    2,
    1,
    1

];


/*
FALANDO:

1 → 2 → 1 → 3 → 4 → repete
*/

const sequenciaSpeaking = [

    1,
    2,
    1,
    3,
    4

];


/*
==========================================
RECONHECIMENTO DE FALA
==========================================
*/

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


let reconhecimento = null;

let ouvindo = false;


if (SpeechRecognition) {

    reconhecimento =
        new SpeechRecognition();


    reconhecimento.lang =
        "pt-BR";


    reconhecimento.continuous =
        false;


    reconhecimento.interimResults =
        false;


    reconhecimento.onstart =
        function() {

            ouvindo = true;


            console.log(
                "FreddyAI: microfone ativado."
            );


            microphoneButton.classList.add(
                "ouvindo"
            );
        };


    reconhecimento.onresult =
        function(event) {

            const resultado =
                event.results[0][0].transcript;


            console.log(
                "FreddyAI transcreveu:",
                resultado
            );


            input.value =
                resultado;


            form.requestSubmit();
        };


    reconhecimento.onerror =
        function(event) {

            console.warn(
                "FreddyAI: erro no reconhecimento de fala:",
                event.error
            );
        };


    reconhecimento.onend =
        function() {

            ouvindo = false;


            microphoneButton.classList.remove(
                "ouvindo"
            );


            console.log(
                "FreddyAI: microfone desativado."
            );
        };

} else {

    console.warn(
        "FreddyAI: reconhecimento de fala não disponível neste ambiente."
    );
}
 
let imagemPendente = null;

/*
==========================================
SISTEMA DE CÂMERA / GALERIA
==========================================
*/


async function otimizarImagemParaFreddy(arquivo) {
    const LIMITE_DIMENSAO = 1280;
    const TAMANHO_ALVO = 700 * 1024;
    const QUALIDADE_INICIAL = 0.85;
    const QUALIDADE_MINIMA = 0.65;
    const PASSO_QUALIDADE = 0.05;

    const imagem = await new Promise((resolve, reject) => {
        const elemento = new Image();
        const url = URL.createObjectURL(arquivo);

        elemento.onload = function() {
            URL.revokeObjectURL(url);
            resolve(elemento);
        };

        elemento.onerror = function() {
            URL.revokeObjectURL(url);
            reject(new Error("Não foi possível carregar a imagem."));
        };

        elemento.src = url;
    });

    let largura = imagem.naturalWidth;
    let altura = imagem.naturalHeight;

    if (
        largura > LIMITE_DIMENSAO ||
        altura > LIMITE_DIMENSAO
    ) {
        const escala = Math.min(
            LIMITE_DIMENSAO / largura,
            LIMITE_DIMENSAO / altura
        );

        largura = Math.round(largura * escala);
        altura = Math.round(altura * escala);
    }

    const canvas = document.createElement("canvas");
    canvas.width = largura;
    canvas.height = altura;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        imagem,
        0,
        0,
        largura,
        altura
    );

    for (
        let qualidade = QUALIDADE_INICIAL;
        qualidade >= QUALIDADE_MINIMA;
        qualidade -= PASSO_QUALIDADE
    ) {
        const blob = await new Promise(resolve => {
            canvas.toBlob(
                resolve,
                "image/jpeg",
                qualidade
            );
        });

        if (!blob) {
            throw new Error("Não foi possível comprimir a imagem.");
        }

        console.log(
            "FreddyAI: qualidade",
            qualidade.toFixed(2),
            "→",
            Math.round(blob.size / 1024),
            "KB"
        );

        if (blob.size <= TAMANHO_ALVO) {
            return await blobParaBase64(blob);
        }
    }

    const blobFinal = await new Promise(resolve => {
        canvas.toBlob(
            resolve,
            "image/jpeg",
            QUALIDADE_MINIMA
        );
    });

    if (!blobFinal) {
        throw new Error("Não foi possível gerar a imagem final.");
    }

    return await blobParaBase64(blobFinal);
}

function blobParaBase64(blob) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.onload = function() {
            resolve(leitor.result);
        };

        leitor.onerror = function() {
            reject(new Error("Não foi possível converter a imagem."));
        };

        leitor.readAsDataURL(blob);
    });
}

async function adicionarImagemNaConversa(
    arquivo
) {

    if (!arquivo) {

        return;
    }


    if (
        !arquivo.type ||
        !arquivo.type.startsWith("image/")
    ) {

        console.warn(
            "FreddyAI: o arquivo selecionado não é uma imagem."
        );

        return;
    }
try {
    imagemPendente =
        await otimizarImagemParaFreddy(arquivo);

    console.log(
        "FreddyAI: imagem otimizada para análise."
    );
} catch (erro) {
    console.error(
        "FreddyAI: erro ao otimizar imagem:",
        erro
    );

    imagemPendente =
        null;
}


    const imagemUrl =
        URL.createObjectURL(
            arquivo
        );


    const mensagem =
        document.createElement("div");


    mensagem.className =
        "message user-message";


    const imagem =
        document.createElement("img");


    imagem.src =
        imagemUrl;


    imagem.alt =
        "Imagem enviada para Freddy";


    imagem.style.display =
        "block";


    imagem.style.maxWidth =
        "100%";


    imagem.style.maxHeight =
        "320px";


    imagem.style.width =
        "auto";


    imagem.style.height =
        "auto";


    imagem.style.borderRadius =
        "12px";


    imagem.style.objectFit =
        "contain";


    mensagem.appendChild(
        imagem
    );


    chat.appendChild(
        mensagem
    );


    chat.scrollTop =
        chat.scrollHeight;


    imagem.onload =
        function() {

            URL.revokeObjectURL(
                imagemUrl
            );
        };


    console.log(
        "FreddyAI: imagem adicionada à conversa:",
        arquivo.name
    );
}


/*
==========================================
ABRIR MENU DE IMAGEM
==========================================
*/

cameraButton.addEventListener(
    "click",
    function() {

        imageMenu.classList.remove(
            "hidden"
        );


        console.log(
            "FreddyAI: menu de imagem aberto."
        );
    }
);


/*
==========================================
ABRIR CÂMERA
==========================================
*/

openCameraButton.addEventListener(
    "click",
    function() {

        imageMenu.classList.add(
            "hidden"
        );


        cameraInput.click();
    }
);


/*
==========================================
ABRIR GALERIA
==========================================
*/

openGalleryButton.addEventListener(
    "click",
    function() {

        imageMenu.classList.add(
            "hidden"
        );


        galleryInput.click();
    }
);


/*
==========================================
FECHAR MENU

O botão pode não existir no HTML.
Por isso verificamos antes.
==========================================
*/

if (closeImageMenu) {

    closeImageMenu.addEventListener(
        "click",
        function() {

            imageMenu.classList.add(
                "hidden"
            );
        }
    );

}

/*
==========================================
MENU DE VISÃO
==========================================
*/

androidButton.addEventListener(
    "click",
    function() {

        visionMenu.classList.remove(
            "hidden"
        );

        console.log(
            "FreddyAI: menu de visão aberto."
        );
    }
);


closeVisionMenu.addEventListener(
    "click",
    function() {

        visionMenu.classList.add(
            "hidden"
        );
    }
);
visionUpdateButton.addEventListener(
    "click",
    function() {

        visionMenu.classList.add(
            "hidden"
        );

        console.log(
            "FreddyAI: visão por atualização selecionada."
        );
    }
);

/*
==========================================
FOTO DA CÂMERA
==========================================
*/

cameraInput.addEventListener(
    "change",
    function() {

        const arquivo =
            cameraInput.files?.[0];


        if (!arquivo) {

            return;
        }


        adicionarImagemNaConversa(
            arquivo
        );


        cameraInput.value =
            "";
    }
);


/*
==========================================
IMAGEM DA GALERIA
==========================================
*/

galleryInput.addEventListener(
    "change",
    function() {

        const arquivo =
            galleryInput.files?.[0];


        if (!arquivo) {

            return;
        }


        adicionarImagemNaConversa(
            arquivo
        );


        galleryInput.value =
            "";
    }
);


/*
==========================================
ANIMAÇÃO
==========================================
*/

let intervaloAnimacao =
    null;


let animacaoAtual =
    null;


let indiceFrame =
    0;


/*
==========================================
MOSTRAR FRAME
==========================================
*/

function mostrarFrame(numero) {

    const imagem =
        framesCarregados[numero];


    if (!imagem) {

        console.warn(
            "Frame não disponível:",
            numero
        );

        return;
    }


    if (
        animacaoAtual ===
        "idle"
    ) {

        freddyIdle.src =
            imagem.src;
    }


    if (
        animacaoAtual ===
        "speaking"
    ) {

        freddySpeaking.src =
            imagem.src;
    }
}


/*
==========================================
PARAR ANIMAÇÃO
==========================================
*/

function pararAnimacao() {

    if (
        intervaloAnimacao !==
        null
    ) {

        clearInterval(
            intervaloAnimacao
        );


        intervaloAnimacao =
            null;
    }
}


/*
==========================================
INICIAR ANIMAÇÃO
==========================================
*/

function iniciarAnimacao(
    tipo,
    sequencia
) {

    pararAnimacao();


    animacaoAtual =
        tipo;


    indiceFrame =
        0;


    mostrarFrame(
        sequencia[
            indiceFrame
        ]
    );


    indiceFrame++;


    intervaloAnimacao =
        setInterval(
            function() {

                mostrarFrame(
                    sequencia[
                        indiceFrame
                    ]
                );


                indiceFrame++;


                if (
                    indiceFrame >=
                    sequencia.length
                ) {

                    indiceFrame =
                        0;
                }

            },
            TEMPO_FRAME
        );
}


/*
==========================================
ANIMAÇÃO IDLE
==========================================
*/

function iniciarAnimacaoIdle() {

    freddySpeaking.classList.add(
        "hidden"
    );


    freddyIdle.classList.remove(
        "hidden"
    );


    iniciarAnimacao(
        "idle",
        sequenciaIdle
    );
}


/*
==========================================
ANIMAÇÃO FALANDO
==========================================
*/

function iniciarAnimacaoSpeaking() {

    freddyIdle.classList.add(
        "hidden"
    );


    freddySpeaking.classList.remove(
        "hidden"
    );


    iniciarAnimacao(
        "speaking",
        sequenciaSpeaking
    );
}


/*
==========================================
VOZ — ELEVENLABS
==========================================
*/

async function gerarAudioFreddy(
    texto
) {

    const resposta =
        await fetch(
            "http://localhost:3000/voz",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    texto: texto
                })
            }
        );


    if (!resposta.ok) {

        let erroTexto =
            "";


        try {

            erroTexto =
                await resposta.text();

        } catch (erro) {

            erroTexto =
                "";
        }


        console.warn(
            "Aviso: não foi possível carregar a voz do Freddy:",
            resposta.status,
            erroTexto
        );


        return null;
    }


    const audioBlob =
        await resposta.blob();


    const audioUrl =
        URL.createObjectURL(
            audioBlob
        );


    const audio =
        new Audio(
            audioUrl
        );


    audio.preload =
        "auto";


    /*
    IMPORTANTE:

    A animação NÃO é iniciada aqui.

    Ela já começa em apresentarResposta().
    */


    audio.addEventListener(
        "ended",
        function() {

            URL.revokeObjectURL(
                audioUrl
            );
        }
    );


    audio.addEventListener(
        "error",
        function(erro) {

            console.error(
                "Erro ao reproduzir áudio:",
                erro
            );


            URL.revokeObjectURL(
                audioUrl
            );
        }
    );


    return audio;
}


/*
==========================================
MENSAGENS
==========================================
*/

function adicionarMensagemUsuario(
    texto
) {

    const mensagem =
        document.createElement(
            "div"
        );


    mensagem.className =
        "message user-message";


    mensagem.textContent =
        texto;


    chat.appendChild(
        mensagem
    );


    chat.scrollTop =
        chat.scrollHeight;
}


function criarMensagemFreddy() {

    const mensagem =
        document.createElement(
            "div"
        );


    mensagem.className =
        "message freddy-message";


    mensagem.textContent =
        "";


    chat.appendChild(
        mensagem
    );


    chat.scrollTop =
        chat.scrollHeight;


    return mensagem;
}


/*
==========================================
APRESENTAÇÃO DA RESPOSTA
==========================================
*/

async function apresentarResposta(
    elemento,
    texto
) {

    elemento.textContent =
        "";


    /*
    ======================================
    FREDDY COMEÇA A FALAR

    A animação começa imediatamente,
    independentemente da voz.
    ======================================
    */

    iniciarAnimacaoSpeaking();


    let audio =
        null;


    /*
    ======================================
    PREPARAR VOZ
    ======================================
    */

    try {

        audio =
            await gerarAudioFreddy(
                texto
            );

    } catch (erro) {

        console.warn(
            "Aviso: falha ao preparar a voz do Freddy.",
            erro
        );


        audio =
            null;
    }


    /*
    ======================================
    REPRODUZIR VOZ
    ======================================
    */

    if (audio) {

        audio.play().catch(
            function(erro) {

                console.warn(
                    "Não foi possível reproduzir a voz:",
                    erro
                );

            }
        );
    }


    /*
    ======================================
    TEXTO GRADUAL
    ======================================
    */

    for (
        let i = 0;
        i < texto.length;
        i++
    ) {

        elemento.textContent +=
            texto[i];


        chat.scrollTop =
            chat.scrollHeight;


        await new Promise(
            function(resolve) {

                setTimeout(
                    resolve,
                    TEMPO_DIGITACAO
                );
            }
        );
    }


    /*
    ======================================
    ESPERAR ÁUDIO TERMINAR
    ======================================
    */

    if (audio) {

        await new Promise(
            function(resolve) {

                if (audio.ended) {

                    resolve();

                    return;
                }


                audio.addEventListener(
                    "ended",
                    resolve,
                    {
                        once: true
                    }
                );


                audio.addEventListener(
                    "error",
                    resolve,
                    {
                        once: true
                    }
                );

            }
        );
    }


    /*
    ======================================
    VOLTAR PARA IDLE
    ======================================
    */

    iniciarAnimacaoIdle();
}


/*
==========================================
ENVIO DA MENSAGEM
==========================================
*/
async function analisarImagemComFreddy(imagem) {

    if (!imagem) {
        console.warn(
            "FreddyAI: nenhuma imagem disponível para análise."
        );
        return;
    }

    console.log(
        "FreddyAI: enviando imagem para análise."
    );

    try {

        const resposta =
            await freddy.responder(
                "Analise o que está sendo mostrado nesta imagem.",
                imagem
            );

        const mensagemFreddy =
            criarMensagemFreddy();

        await apresentarResposta(
            mensagemFreddy,
            resposta
        );

    } catch (erro) {

        console.error(
            "FreddyAI: erro ao analisar imagem:",
            erro
        );

        const mensagemFreddy =
            criarMensagemFreddy();

        mensagemFreddy.textContent =
            "Não consegui analisar esta imagem.";
    }
}

async function enviarMensagem() {

    const texto =
        input.value.trim();


    if (!texto) {

        return;
    }


    adicionarMensagemUsuario(
        texto
    );


    input.value =
        "";


    input.focus();


    sendButton.disabled =
        true;


    input.disabled =
        true;


    try {

        const resposta =
    await freddy.responder(
        texto,
        imagemPendente
    );
imagemPendente = null;


        const mensagemFreddy =
            criarMensagemFreddy();


        await apresentarResposta(
            mensagemFreddy,
            resposta
        );

    } catch (erro) {

        console.error(
            "Erro ao conversar com Freddy:",
            erro
        );


        iniciarAnimacaoIdle();


        const mensagemFreddy =
            criarMensagemFreddy();


        mensagemFreddy.textContent =
            "Ocorreu um erro ao processar sua mensagem.";
    }


    finally {

        sendButton.disabled =
            false;


        input.disabled =
            false;


        input.focus();
    }
}


/*
==========================================
MICROFONE
==========================================
*/

microphoneButton.addEventListener(
    "click",
    function() {

        if (!reconhecimento) {

            console.warn(
                "Reconhecimento de fala não disponível."
            );

            return;
        }


        if (ouvindo) {

            reconhecimento.stop();

            return;
        }


        try {

            reconhecimento.start();

        } catch (erro) {

            console.warn(
                "Não foi possível iniciar o microfone:",
                erro
            );
        }
    }
);


/*
==========================================
FORMULÁRIO
==========================================
*/

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        enviarMensagem();
    }
);


/*
==========================================
INICIALIZAÇÃO
==========================================
*/

async function iniciarFreddyAI() {

    await carregarTodosOsFrames();


    if (framesCarregados[1]) {

        freddyIdle.src =
            framesCarregados[1].src;


        freddySpeaking.src =
            framesCarregados[1].src;
    }


    iniciarAnimacaoIdle();


    console.log(
        "FreddyAI — interface carregada."
    );
}


iniciarFreddyAI();