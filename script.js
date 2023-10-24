/*

Esse código foi criado pelo Ilja van Eck, usei ele (o código) como fonte de para estudar jQuery e GSAP. Acredito que você busque o mesmo conhecimento e por esse motivo resolvi comentar todo o código, caso queira ver o conteúdo original em inglês acesse o link: https://www.youtube.com/watch?v=1l1GNa9ni9w&t=11s&ab_channel=IljavanEck.

Antes de mais nada, preciso que você entenda duas coisas:

  01. O GSAP e o jQuery são biblioteca do JavaScript e por esse motivo são ferramentas que nos ajudam a enxugar o código e simpleficar processos que seriam longos e complexos, caso queira aprender sobre JavaScript,jQuery e Gsap deixarei ótimas referencias aqui abaixo:

    01.01. JavaScript: https://www.w3schools.com/js/default.asp
    01.02. jQuery:  https://www.w3schools.com/jquery/default.asp
    01.03. GSAP: https://gsap.com/resources/get-started
    
  02. Mesmo que você não entenda jQuery e GSAP é interessante reconhece a sintaxe dessas bibliotecas, dessa forma vai se familiarizar com essas bibliotecas:

    02.01 jQuey: $( elemento ).ação()
    02.02 GSAP: gsap.método( 'elemento', manipulação do objeto )
  
  03. Dito isso, vamos iniciar!

  Minhas redes sociais:

    Github: https://github.com/weslleycabral
    Linkedin: https://www.linkedin.com/in/weslley-cabral-857217143/
    Instagram: https://www.instagram.com/weslleyjuann/

  Bora codar!
*/





$(document).ready(() => {
  gsap.to(".load_grid-item", {
    opacity: 0,
    duration: 0.001,
    stagger: {
      amount: 0.8,
      from: "random"
    },
    onComplete: () => {
      $(".load_grid").css({
        display: "none"
      });
    }
  });

  // Comece por aqui!
   
  $("a").on("click", function (next) { //
    const $this = $(this);
    let destination = $this.attr("href");
    if (
      $this.prop("hostname") === window.location.host &&
      $this.attr("href").indexOf("#") === -1 &&
      $this.attr("target") !== "_blank"
    ) {
      next.preventDefault();
      gsap.set(".load_grid", { display: "grid" });
      gsap.fromTo(
        ".load_grid-item",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.001,
          stagger: {
            amount: 0.8,
            from: "random"
          },
          onComplete: () => {
            window.location = destination;
          }
        }
      );
    }
  });
});
