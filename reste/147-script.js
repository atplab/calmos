window.PCK = function () {
  try {
    return !Appareil.pc()
      ? 1
      : Math.min(1.8, Math.max(1, ((innerHeight || 700) - 86) / 760));
  } catch (e) {
    return 1;
  }
};
window.PCW = function (h) {
  try {
    return !Appareil.pc()
      ? 560
      : Math.max(560, Math.min(1000, Math.round(h * 1.05)));
  } catch (e) {
    return 560;
  }
};
