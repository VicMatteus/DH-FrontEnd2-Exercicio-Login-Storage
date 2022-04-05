// Esta es la base de datos de nuestros usuarios
const baseDeDados = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

function selecionar(campo)
{
  return document.querySelector(campo);
}
function confere() {
  
}
function validaLogin(email, senha)
{
  let podeEntrar = false;
  for(let elemento of baseDeDados.usuarios)
  {
    if(elemento.email === email)
    {
      if(elemento.password === senha)
      {
        return podeEntrar = true;
      }
    }
  }
  return podeEntrar;
}
function mostrar(msg) {
  console.log(msg);
}
let form = selecionar('#formulario');

if(localStorage.getItem('manterConectado') === 'false'|| localStorage.getItem('manterConectado') === null)
{
  form.addEventListener('submit', function(event)
  {
    let email = selecionar('#email-input').value;
    let senha = selecionar('#password-input').value;
    mostrar(email);
    mostrar(senha);

    if(validaLogin(email, senha))
    {
      localStorage.setItem('manterConectado', true);
      selecionar('#loader').classList.remove("hidden")
      setTimeout(() => {
        window.location.href = "bemVindo.html";
      }, 3000);
    }
    else
    {
      event.preventDefault();
      let erros = selecionar('#error-container');
      erros.classList.remove("hidden")
      erros.innerHTML = "Email ou senha inválida.";
      document.querySelector('#email-input').value = ""; 
      /*
        interessante notar o pq de não ter dado pra usar a variável email
        ela serviu apenas para armazenar o que tinha dentro do input quando ele foi capturado. tentar atribuir outra coisa a ela 
        aqui no js só vai mudar seu valor de variável, mas não o que tem dentro do objeto no front. tipo variável de referencia do java.
      */
        document.getElementById('password-input').value = "";//só pra testar
    }
  })
}
else if(localStorage.getItem('manterConectado') === 'true')
{
  window.location.href = "bemVindo.html"
}



//// ATIVIDADE

/// Passo a passo:

// 1) Quando a pessoa faz o login, se as validações que já temos no local tiverem sido bem sucedidas,
// devemos armazenar a informação do utilizador no LocalStorage.

// 2) Na mensagem de boas-vindas que já tínhamos implementado, teremos de acrescentar
// o nome da pessoa e um e um botão "Logout".

// 3) Uma vez iniciada a sessão, a sessão deve ser mantida nesse estado no caso de a pessoa
// recarregar a página. Para fazer isso, terá de validar se a informação do utilizador existe neste momento em
// quando a página é carregada, e com base nessa condição decidir quais os elementos mostrar.

// 4) No caso de a pessoa clicar no botão "Logout", deverá ser eliminada
// a informação do utilizador, exibir uma mensagem indicando que a sessão foi encerrada, e recarregar
// a página para voltar a exibir o formulário de login.

/* 
DICAS:
  - Para alcançar os objetivos deste exercício, você terá de recorrer a alguns dos eventos e métodos que vimos em aulas anteriores.
    Te convidamos a verificar esses recursos caso tenha alguma dúvida, pois neles encontrará todas as respostas 
    necessárias para completar a actividade.

  - Lembre-se que pode selecionar e manipular os elementos do arquivo index.html, utilizando os
    recursos que o Javascript lhe oferece. Além disso, no arquivo styles.css tem algumas classes predefinidas e 
    estilos pré-definidos para o ajudar a completar a actividade.

  - Ao guardar informação do utilizador no browser, lembre-se que devemos guardar apenas a informação necessária, e NÃO DEVEMOS GUARDAR A SENHA. 
    Desta maneira, você deve selecionar e separar as informações que tem de armazenar, a partir do objeto que contém a informação do utilizador. 

   Mão à obra! Bora pro código!

 */
