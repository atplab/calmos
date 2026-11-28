act.otaCheck = () => {
  const s = document.getElementById("otas");
  window.CalmosUpdate &&
    window.CalmosUpdate.check((t) => {
      const e = document.getElementById("otas");
      e && (e.textContent = t);
    });
};
