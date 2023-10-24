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

  $("a").on("click", function (next) {
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
