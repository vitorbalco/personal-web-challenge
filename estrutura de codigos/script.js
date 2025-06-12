function mostrarTexto() {
    const texto = document.getElementById("texto");
    const button = document.querySelector(".button_info");

    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "block";
        button.textContent = "Ocultar ";

     } else {
        texto.style.display = "none";
        button.textContent = "Clique aqui";
        }
    }

function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    const buttonn = document.querySelector("button_msg");

    if (mensagem.style.display === "none" || mensagem.style.display === "") {
    mensagem.style.display = "block";
    buttonn.textContent = "Fechar Mensagem";
    
    } else {
        mensagem.style.display = "none";
        buttonn.textContent = "Ver Mensagem Misteriosa!";
        }

    }
