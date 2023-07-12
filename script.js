function validacaoNome() {
  const nomeFormulario = document.querySelector("#nome");
  const nome = nomeFormulario.value;

  if (nome.length > 50) {
    alert("Erro ao enviar: O nome deve conter no máximo 50 caracteres");
  };
};


function validacaoEmail() {
    const emailFormulario = document.querySelector('#email');
    const email = emailFormulario.value; 

    const validarEmail = /\w+@\w+\.\w+/;

    if(!validarEmail.test(email)) {
        alert("Erro ao enviar: insira um endereço de e-mail válido.");
    };

};

function validacaoAssunto() {
    const assuntoFormulario = document.querySelector('#assunto');
    const assunto = assuntoFormulario.value; 

    if (assunto.length > 50) {
        alert("Erro ao enviar: O Assunto deve conter no máximo 50 caracteres");
      };

};


function validacaoMensagem() {
    const mensagemFormulario = document.querySelector('#mensagem');
    const mensagem = mensagemFormulario.value; 

    if(mensagem.length > 300) {
        alert("Erro ao enviar: A mensagem deve conter no máximo 300 caracteres");        
    };
};


const btn = document.querySelector(".contato__btn");
btn.addEventListener("click", function () {
   validacaoNome();
   validacaoEmail();
   validacaoAssunto();
   validacaoMensagem();  
   
   
});

