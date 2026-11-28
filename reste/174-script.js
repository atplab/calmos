addEventListener("keydown", (e) => {
  try {
    if (
      !document.querySelector(".sd[role=grid]") ||
      /INPUT|TEXTAREA/.test(e.target.tagName) ||
      (e.ctrlKey && e.key !== "z") ||
      e.altKey
    )
      return;
    if (/^[1-9]$/.test(e.key)) act.sdn(e.key);
    else if (e.key === "Backspace" || e.key === "Delete" || e.key === "0") act.sde();
    else if (e.key === "z" && e.ctrlKey) act.sdu();
    else return;
    e.preventDefault();
  } catch (x) {}
});
