(() => {
  const w = (f, g) =>
      function () {
        const b = fl,
          r = f.apply(this, arguments);
        try {
          if (fl < b) setTimeout(g, 350);
        } catch (e) {}
        return r;
      },
    g = () => {
      try {
        aqShut();
      } catch (e) {}
    };
  try {
    aqAdopt = w(aqAdopt, g);
  } catch (e) {}
  try {
    aqPlBuy = w(aqPlBuy, g);
  } catch (e) {}
  try {
    aqBuy = w(aqBuy, g);
  } catch (e) {}
})();
