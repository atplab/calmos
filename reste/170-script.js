setInterval(() => {
  try {
    document.querySelector(".pg-planetes,.pg-brick") && scrollY > 0 && scrollTo(0, 0);
  } catch (e) {}
}, 300);
