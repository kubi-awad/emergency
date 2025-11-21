const beeInfo = {
  head: {
    title: "Hoved",
    text: "Hovedet er dræberbiens primære sansezone. Når du rammer her, mister den orienteringen og kan ikke sigte sit stik præcist.",
    effekt: "Høj – forstyrrer dens reaktioner.",
    styrke: "Lav – punktet er tydeligt.",
  },

  wing: {
    title: "Vinge",
    text: "Biens vinger er ekstremt følsomme. Et tryk her skaber ubalance og reducerer dens flyveevne markant.",
    effekt: "Meget høj – forstyrrer dens bevægelse.",
    styrke: "Mellem – bevæger sig hurtigt.",
  },

  sting: {
    title: "Brod",
    text: "Brodden styrer giftangrebet. Et pres her gør det svært for bien at stikke effektivt.",
    effekt: "Høj – mindsker risikoen for stik.",
    styrke: "Lav – stort område og nemt at ramme.",
  },
};

document.querySelectorAll(".hotspot").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.target;
    const data = beeInfo[key];

    document.getElementById("info-h2").textContent = data.title;
    document.getElementById("info-p").textContent = data.text;
    document.getElementById("effekt").textContent = data.effekt;
    document.getElementById("styrke").textContent = data.styrke;
  });
});
