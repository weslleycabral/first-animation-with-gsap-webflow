/*

Esse código foi criado pelo Ilja van Eck, usei ele (o código) como fonte de para estudar jQuery e GSAP. Acredito que você busque o mesmo conhecimento e por esse motivo resolvi comentar todo o código, caso queira ver o conteúdo original em inglês acesse o link: https://www.youtube.com/watch?v=1l1GNa9ni9w&t=11s&ab_channel=IljavanEck.

Antes de mais nada, preciso que você entenda duas coisas:

  01. O GSAP e o jQuery são biblioteca do JavaScript e por esse motivo são ferramentas que nos ajudam a enxugar o código e simpleficar processos que seriam longos e complexos, caso queira aprender sobre JavaScript,jQuery e Gsap deixarei ótimas referencias aqui abaixo:

    01.01. JavaScript: https://www.w3schools.com/js/default.asp
    01.02. jQuery:  https://www.w3schools.com/jquery/default.asp
    01.03. GSAP: https://gsap.com/resources/get-started
    
  02. Mesmo que você não entenda jQuery e GSAP é interessante reconhece a sintaxe dessas bibliotecas, dessa forma vai se familiarizar com essas bibliotecas:

    02.01 jQuey: $( elemento ).ação()
    02.02 GSAP: gsap.método( 'elemento' , manipulação do objeto )
  
  03. Dito isso, vamos iniciar!

  Minhas redes sociais:

    Github: https://github.com/weslleycabral
    Linkedin: https://www.linkedin.com/in/weslley-cabral-857217143/
    Instagram: https://www.instagram.com/weslleyjuann/

  Bora codar!

*/



// $(document) é o documento HTML e .ready() é um método que só executa a funçao de callbal (()=>{}) depois do carregamento completo o arquivo HTML, isso previne uma série de erros, por exemplo, uma funçao tentar executar uma tarefa de um elemento que ainda nem foi carregado.
$(document).ready(() => {


  // Vá para a linha 56 para entender melhor a animação.
  // Como o usuário foi redirecionado para cá atrasavés do evento onComplete: () => {window.location = destination} precisamos fazer com que a animação se desfaça ao contrário, como o estado display do .load_grid-item está setado como grid de forma padrão, precisamos fazer ele desaparecer de forma animada.
  gsap.to(".load_grid-item", { // Essa funçao faz com que o .load_grid-item saia do seu estado normal "ligado", para(to) o estado selecionado
    opacity: 0,
    duration: 0.001,
    stagger: {
      amount: 0.8,
      from: "random"
    },

    // Depois que a animçao dos .load_gri-item terminam nós pedimos através dessa função para que o .load_grid seja "desativado" alterando sua propriedade css de "grid" para "none"
    onComplete: () => {
      $(".load_grid").css({
        display: "none"
      });
    }
  });

   

// $('a') seleciona todos os elementos <a>, ou seja, todos os link, .on() funciona como um 'ouvidor de eventos', "click" é um evento que será ouvido, isso quer dizer que, quando alguém clicar em algum link $(a) vários eventos serão disparados, mas somente o evento de click será escutado pelo on() e quando o evento de click acontecer será executada a função (next) => {...}.
  $("a").on("click", function (next) { 

    const $this = $(this); // Quando usando o $(this) dentro de um função nós estamos nos referindo ao elemento anteriormente selecionado, nesse caso o $("a"), estou armazendo o $(this)/$("a") dentro de uma constante nomeada de $this, o nome poderia ser qualquer outro mas eu escolhi $this.

    let destination = $this.attr("href"); // Essa constante está armazenando um dos atributos de uma âncora, que é o href (o endereço), uma âncora possui outros atributos como o target,download, ping, type e entre outros. Neste caso estamos armazenando o atributo href contido no link e estamos colocando ele dentro de uma variável chamada destination para ser usada futuramente.


    //O if é uma condição, neste caso estou solicitanto que 3 regras seja atendidas para que o código seguinte sejae xecutado, se por algum motivo alguma regra estipulada não seja cumprida, as funções seguintes não serão executadas.

    if (
      $this.prop("hostname") === window.location.host && // Regra 01: Verifica se hostname do link é identico ao host
      $this.attr("href").indexOf("#") == -1 && // Regra 02: Verifica se link não está levando o user para um seçao dentro da mesma página
      $this.attr("target") !== "_blank" // Regra 03: Verifica se o link clicado não vai abrir outra aba ao invés de navegar dentro da mesma aba
    ) { 
      // Se alguma dessas regras não forem obedeciadas os códigos abaixo não serão executados

      next.preventDefault(); // next é parâmetro que foi passado no início de tudo, ele está armazenando o evento do click, o evento preventDefault() está impedindo o 'comportamento natural de um link' que é de navegar para o endereço pré estabelecido.

      gsap.set(".load_grid", { display: "grid" }); // Essa função está acessando a biblioteca gsap e mandado a .load_grid mudar seu display para grid, pq quando a página carrega pela primeira vez o display está "none", ou seja, desativada.

      gsap.fromTo( // Essa função está setando o estado inicial e final dos quadradrinhos .load_grid-item, trabalhando sua opacidade, duração e delay
        ".load_grid-item",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.001,
          stagger: {
            amount: 0.8,
            from: "random"
          },

          // Depois que a animação termina nós direcionamos o usuário para a página que desejou ir quando clicou no link, a variável criada anteriormente chamda destination está armazenando o href do $('a'), e somente agora está permitindo que o usuário seja redirecionado.

          onComplete: () => {
            window.location = destination;
          }
        }
      );
    }
  });
});
